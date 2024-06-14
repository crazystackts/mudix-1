import { DependentDocument as TDependentDocument } from "../api/dependentDocument/DependentDocument";

export const DEPENDENTDOCUMENT_TITLE_FIELD = "issuer";

export const DependentDocumentTitle = (record: TDependentDocument): string => {
  return record.issuer?.toString() || String(record.id);
};
