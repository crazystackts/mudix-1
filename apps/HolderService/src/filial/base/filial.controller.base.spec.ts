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
import { FilialController } from "../filial.controller";
import { FilialService } from "../filial.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  firstName: "exampleFirstName",
  holderId: "exampleHolderId",
  id: "exampleId",
  lastName: "exampleLastName",
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  firstName: "exampleFirstName",
  holderId: "exampleHolderId",
  id: "exampleId",
  lastName: "exampleLastName",
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    firstName: "exampleFirstName",
    holderId: "exampleHolderId",
    id: "exampleId",
    lastName: "exampleLastName",
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  firstName: "exampleFirstName",
  holderId: "exampleHolderId",
  id: "exampleId",
  lastName: "exampleLastName",
  typeField: "exampleTypeField",
};

const service = {
  createFilial() {
    return CREATE_RESULT;
  },
  filials: () => FIND_MANY_RESULT,
  filial: ({ where }: { where: { id: string } }) => {
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

describe("Filial", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FilialService,
          useValue: service,
        },
      ],
      controllers: [FilialController],
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

  test("POST /filials", async () => {
    await request(app.getHttpServer())
      .post("/filials")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /filials", async () => {
    await request(app.getHttpServer())
      .get("/filials")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /filials/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/filials"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /filials/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/filials"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /filials existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/filials")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/filials")
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
