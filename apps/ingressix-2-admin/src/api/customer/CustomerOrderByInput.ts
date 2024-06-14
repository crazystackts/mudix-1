import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  customerCpf?: SortOrder;
  customerCredential?: SortOrder;
  customerName?: SortOrder;
  id?: SortOrder;
};
