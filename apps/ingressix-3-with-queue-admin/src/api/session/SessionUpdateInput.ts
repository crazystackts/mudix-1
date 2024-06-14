import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { OrderItemUpdateManyWithoutSessionsInput } from "./OrderItemUpdateManyWithoutSessionsInput";
import { OrderUpdateManyWithoutSessionsInput } from "./OrderUpdateManyWithoutSessionsInput";
import { QueuePositionUpdateManyWithoutSessionsInput } from "./QueuePositionUpdateManyWithoutSessionsInput";
import { TicketUpdateManyWithoutSessionsInput } from "./TicketUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  events?: EventWhereUniqueInput;
  maxTickets?: number;
  orderItems?: OrderItemUpdateManyWithoutSessionsInput;
  orders?: OrderUpdateManyWithoutSessionsInput;
  queuePositions?: QueuePositionUpdateManyWithoutSessionsInput;
  remainingTickets?: number;
  saleEndDate?: Date;
  saleStartDate?: Date;
  sessionDateTime?: Date;
  sessionStatus?: string;
  sessionType?: string;
  tickets?: TicketUpdateManyWithoutSessionsInput;
};
