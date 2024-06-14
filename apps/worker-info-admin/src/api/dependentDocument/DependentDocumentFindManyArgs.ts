import { DependentDocumentWhereInput } from "./DependentDocumentWhereInput";
import { DependentDocumentOrderByInput } from "./DependentDocumentOrderByInput";

export type DependentDocumentFindManyArgs = {
  where?: DependentDocumentWhereInput;
  orderBy?: Array<DependentDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
