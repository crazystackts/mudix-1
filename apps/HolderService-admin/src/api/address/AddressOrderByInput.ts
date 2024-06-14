import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  complement?: SortOrder;
  holderId?: SortOrder;
  id?: SortOrder;
  neighborhood?: SortOrder;
  numberField?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  title?: SortOrder;
  zip?: SortOrder;
};
