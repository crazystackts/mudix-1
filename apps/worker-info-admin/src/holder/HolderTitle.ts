import { Holder as THolder } from "../api/holder/Holder";

export const HOLDER_TITLE_FIELD = "affectionateFirstName";

export const HolderTitle = (record: THolder): string => {
  return record.affectionateFirstName?.toString() || String(record.id);
};
