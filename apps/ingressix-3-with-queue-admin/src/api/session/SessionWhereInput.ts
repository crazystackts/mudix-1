import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { QueuePositionListRelationFilter } from "../queuePosition/QueuePositionListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type SessionWhereInput = {
  events?: EventWhereUniqueInput;
  id?: StringFilter;
  maxTickets?: IntFilter;
  orderItems?: OrderItemListRelationFilter;
  orders?: OrderListRelationFilter;
  queuePositions?: QueuePositionListRelationFilter;
  remainingTickets?: IntFilter;
  saleEndDate?: DateTimeFilter;
  saleStartDate?: DateTimeFilter;
  sessionDateTime?: DateTimeFilter;
  sessionStatus?: StringFilter;
  sessionType?: StringFilter;
  tickets?: TicketListRelationFilter;
};
