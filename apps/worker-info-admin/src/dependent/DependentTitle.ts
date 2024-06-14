import { Dependent as TDependent } from "../api/dependent/Dependent";

export const DEPENDENT_TITLE_FIELD = "affectionateFirstName";

export const DependentTitle = (record: TDependent): string => {
  return record.affectionateFirstName?.toString() || String(record.id);
};
