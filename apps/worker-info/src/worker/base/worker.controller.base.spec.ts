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
import { WorkerController } from "../worker.controller";
import { WorkerService } from "../worker.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cnpj: "exampleCnpj",
  companyName: "exampleCompanyName",
  cpf: "exampleCpf",
  ctpsNumber: "exampleCtpsNumber",
  ctpsSeries: "exampleCtpsSeries",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  status: "exampleStatus",
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  cnpj: "exampleCnpj",
  companyName: "exampleCompanyName",
  cpf: "exampleCpf",
  ctpsNumber: "exampleCtpsNumber",
  ctpsSeries: "exampleCtpsSeries",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  status: "exampleStatus",
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    cnpj: "exampleCnpj",
    companyName: "exampleCompanyName",
    cpf: "exampleCpf",
    ctpsNumber: "exampleCtpsNumber",
    ctpsSeries: "exampleCtpsSeries",
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    status: "exampleStatus",
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  cnpj: "exampleCnpj",
  companyName: "exampleCompanyName",
  cpf: "exampleCpf",
  ctpsNumber: "exampleCtpsNumber",
  ctpsSeries: "exampleCtpsSeries",
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  status: "exampleStatus",
  typeField: "exampleTypeField",
};

const service = {
  createWorker() {
    return CREATE_RESULT;
  },
  workers: () => FIND_MANY_RESULT,
  worker: ({ where }: { where: { id: string } }) => {
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

describe("Worker", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WorkerService,
          useValue: service,
        },
      ],
      controllers: [WorkerController],
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

  test("POST /workers", async () => {
    await request(app.getHttpServer())
      .post("/workers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /workers", async () => {
    await request(app.getHttpServer())
      .get("/workers")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /workers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /workers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/workers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /workers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/workers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/workers")
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
