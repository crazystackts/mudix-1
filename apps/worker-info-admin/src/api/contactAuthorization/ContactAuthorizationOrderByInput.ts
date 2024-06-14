import { SortOrder } from "../../util/SortOrder";

export type ContactAuthorizationOrderByInput = {
  email?: SortOrder;
  holder_id?: SortOrder;
  id?: SortOrder;
  push?: SortOrder;
  sms?: SortOrder;
};
