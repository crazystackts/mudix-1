import { SortOrder } from "../../util/SortOrder";

export type PaymentHistoryOrderByInput = {
  id?: SortOrder;
  orderId?: SortOrder;
  paymentAmount?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  paymentStatus?: SortOrder;
};
