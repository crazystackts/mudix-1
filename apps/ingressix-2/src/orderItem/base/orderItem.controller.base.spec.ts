import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OrderItemController } from "../orderItem.controller";
import { OrderItemService } from "../orderItem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  orderItemDateTime: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  orderItemDateTime: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    orderItemDateTime: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  orderItemDateTime: new Date(),
};

const service = {
  createOrderItem() {
    return CREATE_RESULT;
  },
  orderItems: () => FIND_MANY_RESULT,
  orderItem: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("OrderItem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderItemService,
          useValue: service,
        },
      ],
      controllers: [OrderItemController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /orderItems", async () => {
    await request(app.getHttpServer())
      .post("/orderItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        orderItemDateTime: CREATE_RESULT.orderItemDateTime.toISOString(),
      });
  });

  test("GET /orderItems", async () => {
    await request(app.getHttpServer())
      .get("/orderItems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          orderItemDateTime:
            FIND_MANY_RESULT[0].orderItemDateTime.toISOString(),
        },
      ]);
  });

  test("GET /orderItems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orderItems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orderItems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orderItems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        orderItemDateTime: FIND_ONE_RESULT.orderItemDateTime.toISOString(),
      });
  });

  test("POST /orderItems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/orderItems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        orderItemDateTime: CREATE_RESULT.orderItemDateTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/orderItems")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
