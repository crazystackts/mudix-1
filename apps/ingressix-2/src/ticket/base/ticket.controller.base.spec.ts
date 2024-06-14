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
import { TicketController } from "../ticket.controller";
import { TicketService } from "../ticket.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cancellationDate: new Date(),
  id: 42,
  price: 42.42,
  priceCategory: "examplePriceCategory",
  priceDescription: "examplePriceDescription",
  qrCode: "exampleQrCode",
  returnDeadline: new Date(),
  seatCode: "exampleSeatCode",
  ticketStatus: "exampleTicketStatus",
};
const CREATE_RESULT = {
  cancellationDate: new Date(),
  id: 42,
  price: 42.42,
  priceCategory: "examplePriceCategory",
  priceDescription: "examplePriceDescription",
  qrCode: "exampleQrCode",
  returnDeadline: new Date(),
  seatCode: "exampleSeatCode",
  ticketStatus: "exampleTicketStatus",
};
const FIND_MANY_RESULT = [
  {
    cancellationDate: new Date(),
    id: 42,
    price: 42.42,
    priceCategory: "examplePriceCategory",
    priceDescription: "examplePriceDescription",
    qrCode: "exampleQrCode",
    returnDeadline: new Date(),
    seatCode: "exampleSeatCode",
    ticketStatus: "exampleTicketStatus",
  },
];
const FIND_ONE_RESULT = {
  cancellationDate: new Date(),
  id: 42,
  price: 42.42,
  priceCategory: "examplePriceCategory",
  priceDescription: "examplePriceDescription",
  qrCode: "exampleQrCode",
  returnDeadline: new Date(),
  seatCode: "exampleSeatCode",
  ticketStatus: "exampleTicketStatus",
};

const service = {
  createTicket() {
    return CREATE_RESULT;
  },
  tickets: () => FIND_MANY_RESULT,
  ticket: ({ where }: { where: { id: string } }) => {
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

describe("Ticket", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TicketService,
          useValue: service,
        },
      ],
      controllers: [TicketController],
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

  test("POST /tickets", async () => {
    await request(app.getHttpServer())
      .post("/tickets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancellationDate: CREATE_RESULT.cancellationDate.toISOString(),
        returnDeadline: CREATE_RESULT.returnDeadline.toISOString(),
      });
  });

  test("GET /tickets", async () => {
    await request(app.getHttpServer())
      .get("/tickets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          cancellationDate: FIND_MANY_RESULT[0].cancellationDate.toISOString(),
          returnDeadline: FIND_MANY_RESULT[0].returnDeadline.toISOString(),
        },
      ]);
  });

  test("GET /tickets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tickets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tickets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tickets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        cancellationDate: FIND_ONE_RESULT.cancellationDate.toISOString(),
        returnDeadline: FIND_ONE_RESULT.returnDeadline.toISOString(),
      });
  });

  test("POST /tickets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tickets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancellationDate: CREATE_RESULT.cancellationDate.toISOString(),
        returnDeadline: CREATE_RESULT.returnDeadline.toISOString(),
      })
      .then(function () {
        agent
          .post("/tickets")
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
