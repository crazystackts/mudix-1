import { SortOrder } from "../../util/SortOrder";

export type PaymentHistoryOrderByInput = {
  amount?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
};
