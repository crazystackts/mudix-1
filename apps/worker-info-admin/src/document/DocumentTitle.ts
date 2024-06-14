import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "issuer";

export const DocumentTitle = (record: TDocument): string => {
  return record.issuer?.toString() || String(record.id);
};
