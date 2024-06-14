import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "holderId";

export const DocumentTitle = (record: TDocument): string => {
  return record.holderId?.toString() || String(record.id);
};
