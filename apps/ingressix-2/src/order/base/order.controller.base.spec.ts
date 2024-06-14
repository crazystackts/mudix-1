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
import { OrderController } from "../order.controller";
import { OrderService } from "../order.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acquisitionChannel: "exampleAcquisitionChannel",
  cancellationDate: new Date(),
  confirmationDate: new Date(),
  creationDate: new Date(),
  id: 42,
  orderStatus: "exampleOrderStatus",
  paymentMethod: "examplePaymentMethod",
  paymentUuidCrd: "examplePaymentUuidCrd",
  paymentUuidOnPremises: "examplePaymentUuidOnPremises",
  pixCode: "examplePixCode",
  pixExpirationDate: new Date(),
  pixExpirationTime: "examplePixExpirationTime",
};
const CREATE_RESULT = {
  acquisitionChannel: "exampleAcquisitionChannel",
  cancellationDate: new Date(),
  confirmationDate: new Date(),
  creationDate: new Date(),
  id: 42,
  orderStatus: "exampleOrderStatus",
  paymentMethod: "examplePaymentMethod",
  paymentUuidCrd: "examplePaymentUuidCrd",
  paymentUuidOnPremises: "examplePaymentUuidOnPremises",
  pixCode: "examplePixCode",
  pixExpirationDate: new Date(),
  pixExpirationTime: "examplePixExpirationTime",
};
const FIND_MANY_RESULT = [
  {
    acquisitionChannel: "exampleAcquisitionChannel",
    cancellationDate: new Date(),
    confirmationDate: new Date(),
    creationDate: new Date(),
    id: 42,
    orderStatus: "exampleOrderStatus",
    paymentMethod: "examplePaymentMethod",
    paymentUuidCrd: "examplePaymentUuidCrd",
    paymentUuidOnPremises: "examplePaymentUuidOnPremises",
    pixCode: "examplePixCode",
    pixExpirationDate: new Date(),
    pixExpirationTime: "examplePixExpirationTime",
  },
];
const FIND_ONE_RESULT = {
  acquisitionChannel: "exampleAcquisitionChannel",
  cancellationDate: new Date(),
  confirmationDate: new Date(),
  creationDate: new Date(),
  id: 42,
  orderStatus: "exampleOrderStatus",
  paymentMethod: "examplePaymentMethod",
  paymentUuidCrd: "examplePaymentUuidCrd",
  paymentUuidOnPremises: "examplePaymentUuidOnPremises",
  pixCode: "examplePixCode",
  pixExpirationDate: new Date(),
  pixExpirationTime: "examplePixExpirationTime",
};

const service = {
  createOrder() {
    return CREATE_RESULT;
  },
  orders: () => FIND_MANY_RESULT,
  order: ({ where }: { where: { id: string } }) => {
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

describe("Order", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderService,
          useValue: service,
        },
      ],
      controllers: [OrderController],
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

  test("POST /orders", async () => {
    await request(app.getHttpServer())
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancellationDate: CREATE_RESULT.cancellationDate.toISOString(),
        confirmationDate: CREATE_RESULT.confirmationDate.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        pixExpirationDate: CREATE_RESULT.pixExpirationDate.toISOString(),
      });
  });

  test("GET /orders", async () => {
    await request(app.getHttpServer())
      .get("/orders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          cancellationDate: FIND_MANY_RESULT[0].cancellationDate.toISOString(),
          confirmationDate: FIND_MANY_RESULT[0].confirmationDate.toISOString(),
          creationDate: FIND_MANY_RESULT[0].creationDate.toISOString(),
          pixExpirationDate:
            FIND_MANY_RESULT[0].pixExpirationDate.toISOString(),
        },
      ]);
  });

  test("GET /orders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        cancellationDate: FIND_ONE_RESULT.cancellationDate.toISOString(),
        confirmationDate: FIND_ONE_RESULT.confirmationDate.toISOString(),
        creationDate: FIND_ONE_RESULT.creationDate.toISOString(),
        pixExpirationDate: FIND_ONE_RESULT.pixExpirationDate.toISOString(),
      });
  });

  test("POST /orders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancellationDate: CREATE_RESULT.cancellationDate.toISOString(),
        confirmationDate: CREATE_RESULT.confirmationDate.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        pixExpirationDate: CREATE_RESULT.pixExpirationDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/orders")
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
