import { SortOrder } from "../../util/SortOrder";

export type DependentContactAuthorizationOrderByInput = {
  dependent_id?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  push?: SortOrder;
  sms?: SortOrder;
};
