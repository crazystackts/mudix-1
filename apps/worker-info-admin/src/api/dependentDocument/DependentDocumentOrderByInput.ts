import { SortOrder } from "../../util/SortOrder";

export type DependentDocumentOrderByInput = {
  dependent_id?: SortOrder;
  id?: SortOrder;
  issuer?: SortOrder;
  numberField?: SortOrder;
  typeField?: SortOrder;
};
