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
import { HolderController } from "../holder.controller";
import { HolderService } from "../holder.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  affectionateFirstName: "exampleAffectionateFirstName",
  affectionateGender: "exampleAffectionateGender",
  affectionateLastName: "exampleAffectionateLastName",
  birthDate: new Date(),
  education: "exampleEducation",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  lastName: "exampleLastName",
  maritalStatus: "exampleMaritalStatus",
  socialFirstName: "exampleSocialFirstName",
  socialGender: "exampleSocialGender",
  socialLastName: "exampleSocialLastName",
  token: "exampleToken",
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  affectionateFirstName: "exampleAffectionateFirstName",
  affectionateGender: "exampleAffectionateGender",
  affectionateLastName: "exampleAffectionateLastName",
  birthDate: new Date(),
  education: "exampleEducation",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  lastName: "exampleLastName",
  maritalStatus: "exampleMaritalStatus",
  socialFirstName: "exampleSocialFirstName",
  socialGender: "exampleSocialGender",
  socialLastName: "exampleSocialLastName",
  token: "exampleToken",
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    affectionateFirstName: "exampleAffectionateFirstName",
    affectionateGender: "exampleAffectionateGender",
    affectionateLastName: "exampleAffectionateLastName",
    birthDate: new Date(),
    education: "exampleEducation",
    firstName: "exampleFirstName",
    gender: "exampleGender",
    id: "exampleId",
    lastName: "exampleLastName",
    maritalStatus: "exampleMaritalStatus",
    socialFirstName: "exampleSocialFirstName",
    socialGender: "exampleSocialGender",
    socialLastName: "exampleSocialLastName",
    token: "exampleToken",
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  affectionateFirstName: "exampleAffectionateFirstName",
  affectionateGender: "exampleAffectionateGender",
  affectionateLastName: "exampleAffectionateLastName",
  birthDate: new Date(),
  education: "exampleEducation",
  firstName: "exampleFirstName",
  gender: "exampleGender",
  id: "exampleId",
  lastName: "exampleLastName",
  maritalStatus: "exampleMaritalStatus",
  socialFirstName: "exampleSocialFirstName",
  socialGender: "exampleSocialGender",
  socialLastName: "exampleSocialLastName",
  token: "exampleToken",
  typeField: "exampleTypeField",
};

const service = {
  createHolder() {
    return CREATE_RESULT;
  },
  holders: () => FIND_MANY_RESULT,
  holder: ({ where }: { where: { id: string } }) => {
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

describe("Holder", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HolderService,
          useValue: service,
        },
      ],
      controllers: [HolderController],
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

  test("POST /holders", async () => {
    await request(app.getHttpServer())
      .post("/holders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthDate: CREATE_RESULT.birthDate.toISOString(),
      });
  });

  test("GET /holders", async () => {
    await request(app.getHttpServer())
      .get("/holders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          birthDate: FIND_MANY_RESULT[0].birthDate.toISOString(),
        },
      ]);
  });

  test("GET /holders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/holders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /holders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/holders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        birthDate: FIND_ONE_RESULT.birthDate.toISOString(),
      });
  });

  test("POST /holders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/holders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        birthDate: CREATE_RESULT.birthDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/holders")
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
