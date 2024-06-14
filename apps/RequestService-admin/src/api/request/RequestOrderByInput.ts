import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  channel?: SortOrder;
  dependents?: SortOrder;
  finalize?: SortOrder;
  holder?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  renewal?: SortOrder;
  step?: SortOrder;
  typeField?: SortOrder;
  workerId?: SortOrder;
};
