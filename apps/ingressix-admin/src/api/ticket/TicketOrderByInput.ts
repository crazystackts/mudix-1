import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  cancellationDate?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  price?: SortOrder;
  priceCategory?: SortOrder;
  priceDescription?: SortOrder;
  qrCode?: SortOrder;
  refundDeadline?: SortOrder;
  seatCode?: SortOrder;
  sessionCode?: SortOrder;
  status?: SortOrder;
};
