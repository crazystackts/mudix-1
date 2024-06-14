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
import { SocioeconomicInfoController } from "../socioeconomicInfo.controller";
import { SocioeconomicInfoService } from "../socioeconomicInfo.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  familyIncomeCode: "exampleFamilyIncomeCode",
  familyIncomeTitle: "exampleFamilyIncomeTitle",
  holderId: "exampleHolderId",
  id: "exampleId",
  salaryCode: "exampleSalaryCode",
  salaryTitle: "exampleSalaryTitle",
};
const CREATE_RESULT = {
  familyIncomeCode: "exampleFamilyIncomeCode",
  familyIncomeTitle: "exampleFamilyIncomeTitle",
  holderId: "exampleHolderId",
  id: "exampleId",
  salaryCode: "exampleSalaryCode",
  salaryTitle: "exampleSalaryTitle",
};
const FIND_MANY_RESULT = [
  {
    familyIncomeCode: "exampleFamilyIncomeCode",
    familyIncomeTitle: "exampleFamilyIncomeTitle",
    holderId: "exampleHolderId",
    id: "exampleId",
    salaryCode: "exampleSalaryCode",
    salaryTitle: "exampleSalaryTitle",
  },
];
const FIND_ONE_RESULT = {
  familyIncomeCode: "exampleFamilyIncomeCode",
  familyIncomeTitle: "exampleFamilyIncomeTitle",
  holderId: "exampleHolderId",
  id: "exampleId",
  salaryCode: "exampleSalaryCode",
  salaryTitle: "exampleSalaryTitle",
};

const service = {
  createSocioeconomicInfo() {
    return CREATE_RESULT;
  },
  socioeconomicInfos: () => FIND_MANY_RESULT,
  socioeconomicInfo: ({ where }: { where: { id: string } }) => {
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

describe("SocioeconomicInfo", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SocioeconomicInfoService,
          useValue: service,
        },
      ],
      controllers: [SocioeconomicInfoController],
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

  test("POST /socioeconomicInfos", async () => {
    await request(app.getHttpServer())
      .post("/socioeconomicInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /socioeconomicInfos", async () => {
    await request(app.getHttpServer())
      .get("/socioeconomicInfos")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /socioeconomicInfos/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/socioeconomicInfos"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /socioeconomicInfos/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/socioeconomicInfos"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /socioeconomicInfos existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/socioeconomicInfos")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/socioeconomicInfos")
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
