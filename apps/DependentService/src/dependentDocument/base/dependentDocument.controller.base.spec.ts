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
import { DependentDocumentController } from "../dependentDocument.controller";
import { DependentDocumentService } from "../dependentDocument.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  dependentsId: "exampleDependentsId",
  id: "exampleId",
  issuer: "exampleIssuer",
  numberField: "exampleNumberField",
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  dependentsId: "exampleDependentsId",
  id: "exampleId",
  issuer: "exampleIssuer",
  numberField: "exampleNumberField",
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    dependentsId: "exampleDependentsId",
    id: "exampleId",
    issuer: "exampleIssuer",
    numberField: "exampleNumberField",
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  dependentsId: "exampleDependentsId",
  id: "exampleId",
  issuer: "exampleIssuer",
  numberField: "exampleNumberField",
  typeField: "exampleTypeField",
};

const service = {
  createDependentDocument() {
    return CREATE_RESULT;
  },
  dependentDocuments: () => FIND_MANY_RESULT,
  dependentDocument: ({ where }: { where: { id: string } }) => {
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

describe("DependentDocument", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DependentDocumentService,
          useValue: service,
        },
      ],
      controllers: [DependentDocumentController],
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

  test("POST /dependentDocuments", async () => {
    await request(app.getHttpServer())
      .post("/dependentDocuments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /dependentDocuments", async () => {
    await request(app.getHttpServer())
      .get("/dependentDocuments")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /dependentDocuments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependentDocuments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dependentDocuments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependentDocuments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /dependentDocuments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dependentDocuments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/dependentDocuments")
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
