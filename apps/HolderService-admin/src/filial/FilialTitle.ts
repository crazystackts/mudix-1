import { Filial as TFilial } from "../api/filial/Filial";

export const FILIAL_TITLE_FIELD = "firstName";

export const FilialTitle = (record: TFilial): string => {
  return record.firstName?.toString() || String(record.id);
};
