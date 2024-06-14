import { SortOrder } from "../../util/SortOrder";

export type DependentContactAuthorizationOrderByInput = {
  dependentsId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  push?: SortOrder;
  sms?: SortOrder;
};
