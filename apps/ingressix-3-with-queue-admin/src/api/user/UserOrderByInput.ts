import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  customerId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  userName?: SortOrder;
};
