import { DependentPhone as TDependentPhone } from "../api/dependentPhone/DependentPhone";

export const DEPENDENTPHONE_TITLE_FIELD = "numberField";

export const DependentPhoneTitle = (record: TDependentPhone): string => {
  return record.numberField?.toString() || String(record.id);
};
