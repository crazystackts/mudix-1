import { DependentContact as TDependentContact } from "../api/dependentContact/DependentContact";

export const DEPENDENTCONTACT_TITLE_FIELD = "dependentsId";

export const DependentContactTitle = (record: TDependentContact): string => {
  return record.dependentsId?.toString() || String(record.id);
};
