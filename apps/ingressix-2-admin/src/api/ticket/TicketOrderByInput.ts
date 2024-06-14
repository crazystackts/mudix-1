import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  cancellationDate?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  priceCategory?: SortOrder;
  priceDescription?: SortOrder;
  qrCode?: SortOrder;
  returnDeadline?: SortOrder;
  seatCode?: SortOrder;
  sessionId?: SortOrder;
  ticketStatus?: SortOrder;
};
