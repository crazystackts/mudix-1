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
import { DependentAddressController } from "../dependentAddress.controller";
import { DependentAddressService } from "../dependentAddress.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  complement: "exampleComplement",
  id: "exampleId",
  neighborhood: "exampleNeighborhood",
  numberField: 42,
  state: "exampleState",
  street: "exampleStreet",
  title: "exampleTitle",
  zip: "exampleZip",
};
const CREATE_RESULT = {
  city: "exampleCity",
  complement: "exampleComplement",
  id: "exampleId",
  neighborhood: "exampleNeighborhood",
  numberField: 42,
  state: "exampleState",
  street: "exampleStreet",
  title: "exampleTitle",
  zip: "exampleZip",
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    complement: "exampleComplement",
    id: "exampleId",
    neighborhood: "exampleNeighborhood",
    numberField: 42,
    state: "exampleState",
    street: "exampleStreet",
    title: "exampleTitle",
    zip: "exampleZip",
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  complement: "exampleComplement",
  id: "exampleId",
  neighborhood: "exampleNeighborhood",
  numberField: 42,
  state: "exampleState",
  street: "exampleStreet",
  title: "exampleTitle",
  zip: "exampleZip",
};

const service = {
  createDependentAddress() {
    return CREATE_RESULT;
  },
  dependentAddresses: () => FIND_MANY_RESULT,
  dependentAddress: ({ where }: { where: { id: string } }) => {
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

describe("DependentAddress", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DependentAddressService,
          useValue: service,
        },
      ],
      controllers: [DependentAddressController],
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

  test("POST /dependentAddresses", async () => {
    await request(app.getHttpServer())
      .post("/dependentAddresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /dependentAddresses", async () => {
    await request(app.getHttpServer())
      .get("/dependentAddresses")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /dependentAddresses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependentAddresses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dependentAddresses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dependentAddresses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /dependentAddresses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dependentAddresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/dependentAddresses")
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
