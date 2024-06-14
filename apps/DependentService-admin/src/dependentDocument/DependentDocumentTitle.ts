import { DependentDocument as TDependentDocument } from "../api/dependentDocument/DependentDocument";

export const DEPENDENTDOCUMENT_TITLE_FIELD = "dependentsId";

export const DependentDocumentTitle = (record: TDependentDocument): string => {
  return record.dependentsId?.toString() || String(record.id);
};
