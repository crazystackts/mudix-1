import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  files?: SortOrder;
  group?: SortOrder;
  holderId?: SortOrder;
  id?: SortOrder;
};
