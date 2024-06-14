import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  acquisitionChannel?: SortOrder;
  cancellationDate?: SortOrder;
  confirmationDate?: SortOrder;
  creationDate?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderStatus?: SortOrder;
  paymentMethod?: SortOrder;
  paymentUuidCrd?: SortOrder;
  paymentUuidOnPremises?: SortOrder;
  pixCode?: SortOrder;
  pixExpirationDate?: SortOrder;
  pixExpirationTime?: SortOrder;
  sessionId?: SortOrder;
};
