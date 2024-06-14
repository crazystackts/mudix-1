import { SortOrder } from "../../util/SortOrder";

export type ContactAuthorizationOrderByInput = {
  email?: SortOrder;
  holderId?: SortOrder;
  id?: SortOrder;
  push?: SortOrder;
  sms?: SortOrder;
};
