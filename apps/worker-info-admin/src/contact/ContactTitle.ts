import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "email";

export const ContactTitle = (record: TContact): string => {
  return record.email?.toString() || String(record.id);
};
