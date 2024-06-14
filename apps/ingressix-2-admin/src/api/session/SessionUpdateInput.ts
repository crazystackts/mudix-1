import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { OrderUpdateManyWithoutSessionsInput } from "./OrderUpdateManyWithoutSessionsInput";
import { OrderItemUpdateManyWithoutSessionsInput } from "./OrderItemUpdateManyWithoutSessionsInput";
import { TicketUpdateManyWithoutSessionsInput } from "./TicketUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  event?: EventWhereUniqueInput;
  maxTickets?: number;
  order?: OrderUpdateManyWithoutSessionsInput;
  orderItems?: OrderItemUpdateManyWithoutSessionsInput;
  remainingTickets?: number;
  saleEndDate?: Date;
  saleStartDate?: Date;
  sessionDateTime?: Date;
  sessionStatus?: string;
  sessionType?: string;
  tickets?: TicketUpdateManyWithoutSessionsInput;
};
