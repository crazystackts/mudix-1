import { Phone as TPhone } from "../api/phone/Phone";

export const PHONE_TITLE_FIELD = "holderId";

export const PhoneTitle = (record: TPhone): string => {
  return record.holderId?.toString() || String(record.id);
};
