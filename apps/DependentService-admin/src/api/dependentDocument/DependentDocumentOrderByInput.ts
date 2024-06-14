import { SortOrder } from "../../util/SortOrder";

export type DependentDocumentOrderByInput = {
  dependentsId?: SortOrder;
  id?: SortOrder;
  issuer?: SortOrder;
  numberField?: SortOrder;
  typeField?: SortOrder;
};
