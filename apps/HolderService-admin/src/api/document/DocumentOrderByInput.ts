import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  holderId?: SortOrder;
  id?: SortOrder;
  issuer?: SortOrder;
  numberField?: SortOrder;
  typeField?: SortOrder;
};
