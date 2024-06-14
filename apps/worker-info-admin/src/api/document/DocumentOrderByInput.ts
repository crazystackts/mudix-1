import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  holder_id?: SortOrder;
  id?: SortOrder;
  issuer?: SortOrder;
  numberField?: SortOrder;
  typeField?: SortOrder;
};
