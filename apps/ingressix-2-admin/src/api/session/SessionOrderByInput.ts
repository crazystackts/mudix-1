import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  eventId?: SortOrder;
  id?: SortOrder;
  maxTickets?: SortOrder;
  remainingTickets?: SortOrder;
  saleEndDate?: SortOrder;
  saleStartDate?: SortOrder;
  sessionDateTime?: SortOrder;
  sessionStatus?: SortOrder;
  sessionType?: SortOrder;
};
