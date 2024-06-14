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
import { QueueHistoryController } from "../queueHistory.controller";
import { QueueHistoryService } from "../queueHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  posicaoAtual: 42,
  recordedAt: new Date(),
  status: "exampleStatus",
};
const CREATE_RESULT = {
  id: "exampleId",
  posicaoAtual: 42,
  recordedAt: new Date(),
  status: "exampleStatus",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    posicaoAtual: 42,
    recordedAt: new Date(),
    status: "exampleStatus",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  posicaoAtual: 42,
  recordedAt: new Date(),
  status: "exampleStatus",
};

const service = {
  createQueueHistory() {
    return CREATE_RESULT;
  },
  queueHistories: () => FIND_MANY_RESULT,
  queueHistory: ({ where }: { where: { id: string } }) => {
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

describe("QueueHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QueueHistoryService,
          useValue: service,
        },
      ],
      controllers: [QueueHistoryController],
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

  test("POST /queueHistories", async () => {
    await request(app.getHttpServer())
      .post("/queueHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        recordedAt: CREATE_RESULT.recordedAt.toISOString(),
      });
  });

  test("GET /queueHistories", async () => {
    await request(app.getHttpServer())
      .get("/queueHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          recordedAt: FIND_MANY_RESULT[0].recordedAt.toISOString(),
        },
      ]);
  });

  test("GET /queueHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queueHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /queueHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queueHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        recordedAt: FIND_ONE_RESULT.recordedAt.toISOString(),
      });
  });

  test("POST /queueHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/queueHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        recordedAt: CREATE_RESULT.recordedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/queueHistories")
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
