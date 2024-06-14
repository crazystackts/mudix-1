import { Phone as TPhone } from "../api/phone/Phone";

export const PHONE_TITLE_FIELD = "numberField";

export const PhoneTitle = (record: TPhone): string => {
  return record.numberField?.toString() || String(record.id);
};
