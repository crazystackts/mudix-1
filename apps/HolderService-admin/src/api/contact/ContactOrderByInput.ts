import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  email?: SortOrder;
  holderId?: SortOrder;
  id?: SortOrder;
};
