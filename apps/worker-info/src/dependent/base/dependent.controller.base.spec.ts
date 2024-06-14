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
import { DependentController } from "../dependent.controller";
import { DependentService } from "../dependent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  affectionateFirstName: "exampleAffectionateFirstName",
  affectionateLastName: "exampleAffectionateLastName",
  birthDate: new Date(),
  complete: "true",
  credential: "exampleCredential",
  education: "exampleEducation",
  exclude: "true",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  lastName: "exampleLastName",
  maritalStatus: "exampleMaritalStatus",
  relationship: "exampleRelationship",
  socialFirstName: "exampleSocialFirstName",
  socialLastName: "exampleSocialLastName",
};
const CREATE_RESULT = {
  affectionateFirstName: "exampleAffectionateFirstName",
  affectionateLastName: "exampleAffectionateLastName",
  birthDate: new Date(),
  complete: "true",
  credential: "exampleCredential",
  education: "exampleEducation",
  exclude: "true",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  lastName: "exampleLastName",
  maritalStatus: "exampleMaritalStatus",
  relationship: "exampleRelationship",
  socialFirstName: "exampleSocialFirstName",
  socialLastName: "exampleSocialLastName",
};
const FIND_MANY_RESULT = [
  {
    affectionateFirstName: "exampleAffectionateFirstName",
    affectionateLastName: "exampleAffectionateLastName",
    birthDate: new Date(),
    complete: "true",
    credential: "exampleCredential",
    education: "exampleEducation",
    exclude: "true",
    firstName: "exampleFirstName",
    gender: "exampleGender",
    id: "exampleId",
    lastName: "exampleLastName",
    maritalStatus: "exampleMaritalStatus",
    relationship: "exampleRelationship",
    socialFirstName: "exampleSocialFirstName",
    socialLastName: "exampleSocialLastName",
  },
];
const FIND_ONE_RESULT = {
  affectionateFirstName: "exampleAffectionateFirstName",
  affectionateLastName: "exampleAffectionateLastName",
  birthDate: new Date(),
  complete: "true",
  credential: "exampleCredential",
  education: "exampleEducation",
  exclude: "true",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  lastName: "exampleLastName",
  maritalStatus: "exampleMaritalStatus",
  relationship: "exampleRelationship",
  socialFirstName: "exampleSocialFirstName",
  socialLastName: "exampleSocialLastName",
};

const service = {
  createDependent() {
    return CREATE_RESULT;
  },
  dependents: () => FIND_MANY_RESULT,
  dependent: ({ where }: { where: { id: string } }) => {
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

describe("Dependent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DependentService,
          useValue: service,
        },
      ],
      controllers: [DependentController],
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

  test("POST /dependents", async () => {
    await request(app.getHttpServer())
      .post("/dependents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthDate: CREATE_RESULT.birthDate.toISOString(),
      });
  });

  test("GET /dependents", async () => {
    await request(app.getHttpServer())
      .get("/dependents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          birthDate: FIND_MANY_RESULT[0].birthDate.toISOString(),
        },
      ]);
  });

  test("GET /dependents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dependents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        birthDate: FIND_ONE_RESULT.birthDate.toISOString(),
      });
  });

  test("POST /dependents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dependents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthDate: CREATE_RESULT.birthDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/dependents")
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
