import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  channel?: SortOrder;
  finalize?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  renewal?: SortOrder;
  step?: SortOrder;
  typeField?: SortOrder;
  worker_id?: SortOrder;
};
