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
import { QueueActionController } from "../queueAction.controller";
import { QueueActionService } from "../queueAction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actionTimestamp: new Date(),
  actionType: "exampleActionType",
  details: "exampleDetails",
  id: "exampleId",
};
const CREATE_RESULT = {
  actionTimestamp: new Date(),
  actionType: "exampleActionType",
  details: "exampleDetails",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    actionTimestamp: new Date(),
    actionType: "exampleActionType",
    details: "exampleDetails",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  actionTimestamp: new Date(),
  actionType: "exampleActionType",
  details: "exampleDetails",
  id: "exampleId",
};

const service = {
  createQueueAction() {
    return CREATE_RESULT;
  },
  queueActions: () => FIND_MANY_RESULT,
  queueAction: ({ where }: { where: { id: string } }) => {
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

describe("QueueAction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QueueActionService,
          useValue: service,
        },
      ],
      controllers: [QueueActionController],
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

  test("POST /queueActions", async () => {
    await request(app.getHttpServer())
      .post("/queueActions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actionTimestamp: CREATE_RESULT.actionTimestamp.toISOString(),
      });
  });

  test("GET /queueActions", async () => {
    await request(app.getHttpServer())
      .get("/queueActions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actionTimestamp: FIND_MANY_RESULT[0].actionTimestamp.toISOString(),
        },
      ]);
  });

  test("GET /queueActions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queueActions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /queueActions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queueActions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actionTimestamp: FIND_ONE_RESULT.actionTimestamp.toISOString(),
      });
  });

  test("POST /queueActions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/queueActions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actionTimestamp: CREATE_RESULT.actionTimestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/queueActions")
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
