import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type SessionWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  maxTickets?: IntFilter;
  order?: OrderListRelationFilter;
  orderItems?: OrderItemListRelationFilter;
  remainingTickets?: IntFilter;
  saleEndDate?: DateTimeFilter;
  saleStartDate?: DateTimeFilter;
  sessionDateTime?: DateTimeFilter;
  sessionStatus?: StringFilter;
  sessionType?: StringFilter;
  tickets?: TicketListRelationFilter;
};
