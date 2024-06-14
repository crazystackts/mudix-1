import { ContactAuthorization as TContactAuthorization } from "../api/contactAuthorization/ContactAuthorization";

export const CONTACTAUTHORIZATION_TITLE_FIELD = "id";

export const ContactAuthorizationTitle = (
  record: TContactAuthorization
): string => {
  return record.id?.toString() || String(record.id);
};
