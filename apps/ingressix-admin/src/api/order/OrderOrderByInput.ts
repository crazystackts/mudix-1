import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  acquisitionChannel?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  onPremisesUuid?: SortOrder;
  orderCancellationDate?: SortOrder;
  orderConfirmationDate?: SortOrder;
  orderCreationDate?: SortOrder;
  orderStatus?: SortOrder;
  paymentMethod?: SortOrder;
  paymentUuid?: SortOrder;
  pixCode?: SortOrder;
  pixExpiration?: SortOrder;
  pixExpirationTime?: SortOrder;
  sessionCode?: SortOrder;
};
