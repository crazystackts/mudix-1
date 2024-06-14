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
import { EventController } from "../event.controller";
import { EventService } from "../event.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  eventClassification: "exampleEventClassification",
  eventDetail: "exampleEventDetail",
  eventDuration: new Date(),
  eventImage: "exampleEventImage",
  eventName: "exampleEventName",
  eventStatus: "exampleEventStatus",
  id: 42,
};
const CREATE_RESULT = {
  eventClassification: "exampleEventClassification",
  eventDetail: "exampleEventDetail",
  eventDuration: new Date(),
  eventImage: "exampleEventImage",
  eventName: "exampleEventName",
  eventStatus: "exampleEventStatus",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    eventClassification: "exampleEventClassification",
    eventDetail: "exampleEventDetail",
    eventDuration: new Date(),
    eventImage: "exampleEventImage",
    eventName: "exampleEventName",
    eventStatus: "exampleEventStatus",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  eventClassification: "exampleEventClassification",
  eventDetail: "exampleEventDetail",
  eventDuration: new Date(),
  eventImage: "exampleEventImage",
  eventName: "exampleEventName",
  eventStatus: "exampleEventStatus",
  id: 42,
};

const service = {
  createEvent() {
    return CREATE_RESULT;
  },
  events: () => FIND_MANY_RESULT,
  event: ({ where }: { where: { id: string } }) => {
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

describe("Event", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventService,
          useValue: service,
        },
      ],
      controllers: [EventController],
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

  test("POST /events", async () => {
    await request(app.getHttpServer())
      .post("/events")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        eventDuration: CREATE_RESULT.eventDuration.toISOString(),
      });
  });

  test("GET /events", async () => {
    await request(app.getHttpServer())
      .get("/events")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          eventDuration: FIND_MANY_RESULT[0].eventDuration.toISOString(),
        },
      ]);
  });

  test("GET /events/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /events/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        eventDuration: FIND_ONE_RESULT.eventDuration.toISOString(),
      });
  });

  test("POST /events existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/events")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        eventDuration: CREATE_RESULT.eventDuration.toISOString(),
      })
      .then(function () {
        agent
          .post("/events")
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
