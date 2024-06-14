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
import { DependentPhoneController } from "../dependentPhone.controller";
import { DependentPhoneService } from "../dependentPhone.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  dependentsId: "exampleDependentsId",
  id: "exampleId",
  numberField: "exampleNumberField",
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  dependentsId: "exampleDependentsId",
  id: "exampleId",
  numberField: "exampleNumberField",
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    dependentsId: "exampleDependentsId",
    id: "exampleId",
    numberField: "exampleNumberField",
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  dependentsId: "exampleDependentsId",
  id: "exampleId",
  numberField: "exampleNumberField",
  typeField: "exampleTypeField",
};

const service = {
  createDependentPhone() {
    return CREATE_RESULT;
  },
  dependentPhones: () => FIND_MANY_RESULT,
  dependentPhone: ({ where }: { where: { id: string } }) => {
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

describe("DependentPhone", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DependentPhoneService,
          useValue: service,
        },
      ],
      controllers: [DependentPhoneController],
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

  test("POST /dependentPhones", async () => {
    await request(app.getHttpServer())
      .post("/dependentPhones")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /dependentPhones", async () => {
    await request(app.getHttpServer())
      .get("/dependentPhones")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /dependentPhones/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependentPhones"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dependentPhones/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependentPhones"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /dependentPhones existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dependentPhones")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/dependentPhones")
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
