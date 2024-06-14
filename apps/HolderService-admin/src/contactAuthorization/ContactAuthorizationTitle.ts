import { ContactAuthorization as TContactAuthorization } from "../api/contactAuthorization/ContactAuthorization";

export const CONTACTAUTHORIZATION_TITLE_FIELD = "holderId";

export const ContactAuthorizationTitle = (
  record: TContactAuthorization
): string => {
  return record.holderId?.toString() || String(record.id);
};
