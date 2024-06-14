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
import { QueuePositionController } from "../queuePosition.controller";
import { QueuePositionService } from "../queuePosition.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  joinedAt: new Date(),
  posicaoAtual: 42,
  priorityLevel: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  joinedAt: new Date(),
  posicaoAtual: 42,
  priorityLevel: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    joinedAt: new Date(),
    posicaoAtual: 42,
    priorityLevel: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  joinedAt: new Date(),
  posicaoAtual: 42,
  priorityLevel: 42,
  updatedAt: new Date(),
};

const service = {
  createQueuePosition() {
    return CREATE_RESULT;
  },
  queuePositions: () => FIND_MANY_RESULT,
  queuePosition: ({ where }: { where: { id: string } }) => {
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

describe("QueuePosition", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QueuePositionService,
          useValue: service,
        },
      ],
      controllers: [QueuePositionController],
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

  test("POST /queuePositions", async () => {
    await request(app.getHttpServer())
      .post("/queuePositions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        joinedAt: CREATE_RESULT.joinedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /queuePositions", async () => {
    await request(app.getHttpServer())
      .get("/queuePositions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          joinedAt: FIND_MANY_RESULT[0].joinedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /queuePositions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queuePositions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /queuePositions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queuePositions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        joinedAt: FIND_ONE_RESULT.joinedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /queuePositions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/queuePositions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        joinedAt: CREATE_RESULT.joinedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/queuePositions")
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
