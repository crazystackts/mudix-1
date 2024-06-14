import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  attachmentsId?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
};
