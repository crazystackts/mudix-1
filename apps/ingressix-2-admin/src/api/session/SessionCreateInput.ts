import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { OrderCreateNestedManyWithoutSessionsInput } from "./OrderCreateNestedManyWithoutSessionsInput";
import { OrderItemCreateNestedManyWithoutSessionsInput } from "./OrderItemCreateNestedManyWithoutSessionsInput";
import { TicketCreateNestedManyWithoutSessionsInput } from "./TicketCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  event: EventWhereUniqueInput;
  maxTickets: number;
  order?: OrderCreateNestedManyWithoutSessionsInput;
  orderItems?: OrderItemCreateNestedManyWithoutSessionsInput;
  remainingTickets: number;
  saleEndDate: Date;
  saleStartDate: Date;
  sessionDateTime: Date;
  sessionStatus: string;
  sessionType: string;
  tickets?: TicketCreateNestedManyWithoutSessionsInput;
};
