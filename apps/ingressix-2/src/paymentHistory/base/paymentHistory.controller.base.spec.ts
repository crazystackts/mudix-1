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
import { PaymentHistoryController } from "../paymentHistory.controller";
import { PaymentHistoryService } from "../paymentHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  paymentAmount: 42.42,
  paymentDate: new Date(),
  paymentMethod: "examplePaymentMethod",
  paymentStatus: "examplePaymentStatus",
};
const CREATE_RESULT = {
  id: 42,
  paymentAmount: 42.42,
  paymentDate: new Date(),
  paymentMethod: "examplePaymentMethod",
  paymentStatus: "examplePaymentStatus",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    paymentAmount: 42.42,
    paymentDate: new Date(),
    paymentMethod: "examplePaymentMethod",
    paymentStatus: "examplePaymentStatus",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  paymentAmount: 42.42,
  paymentDate: new Date(),
  paymentMethod: "examplePaymentMethod",
  paymentStatus: "examplePaymentStatus",
};

const service = {
  createPaymentHistory() {
    return CREATE_RESULT;
  },
  paymentHistories: () => FIND_MANY_RESULT,
  paymentHistory: ({ where }: { where: { id: string } }) => {
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

describe("PaymentHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PaymentHistoryService,
          useValue: service,
        },
      ],
      controllers: [PaymentHistoryController],
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

  test("POST /paymentHistories", async () => {
    await request(app.getHttpServer())
      .post("/paymentHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        paymentDate: CREATE_RESULT.paymentDate.toISOString(),
      });
  });

  test("GET /paymentHistories", async () => {
    await request(app.getHttpServer())
      .get("/paymentHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          paymentDate: FIND_MANY_RESULT[0].paymentDate.toISOString(),
        },
      ]);
  });

  test("GET /paymentHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /paymentHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/paymentHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        paymentDate: FIND_ONE_RESULT.paymentDate.toISOString(),
      });
  });

  test("POST /paymentHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/paymentHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        paymentDate: CREATE_RESULT.paymentDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/paymentHistories")
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
