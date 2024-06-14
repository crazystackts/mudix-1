import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "title";

export const AddressTitle = (record: TAddress): string => {
  return record.title?.toString() || String(record.id);
};
