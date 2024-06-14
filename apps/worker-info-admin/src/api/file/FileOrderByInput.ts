import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  attachment_id?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
};
