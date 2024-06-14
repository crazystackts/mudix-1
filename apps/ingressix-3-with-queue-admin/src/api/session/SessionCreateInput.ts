import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutSessionsInput } from "./OrderItemCreateNestedManyWithoutSessionsInput";
import { OrderCreateNestedManyWithoutSessionsInput } from "./OrderCreateNestedManyWithoutSessionsInput";
import { QueuePositionCreateNestedManyWithoutSessionsInput } from "./QueuePositionCreateNestedManyWithoutSessionsInput";
import { TicketCreateNestedManyWithoutSessionsInput } from "./TicketCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  events: EventWhereUniqueInput;
  maxTickets: number;
  orderItems?: OrderItemCreateNestedManyWithoutSessionsInput;
  orders?: OrderCreateNestedManyWithoutSessionsInput;
  queuePositions?: QueuePositionCreateNestedManyWithoutSessionsInput;
  remainingTickets: number;
  saleEndDate: Date;
  saleStartDate: Date;
  sessionDateTime: Date;
  sessionStatus: string;
  sessionType: string;
  tickets?: TicketCreateNestedManyWithoutSessionsInput;
};
