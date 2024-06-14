import { DependentAddress as TDependentAddress } from "../api/dependentAddress/DependentAddress";

export const DEPENDENTADDRESS_TITLE_FIELD = "title";

export const DependentAddressTitle = (record: TDependentAddress): string => {
  return record.title?.toString() || String(record.id);
};
