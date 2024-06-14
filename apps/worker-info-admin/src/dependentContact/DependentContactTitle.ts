import { DependentContact as TDependentContact } from "../api/dependentContact/DependentContact";

export const DEPENDENTCONTACT_TITLE_FIELD = "email";

export const DependentContactTitle = (record: TDependentContact): string => {
  return record.email?.toString() || String(record.id);
};
