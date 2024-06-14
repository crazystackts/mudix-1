import { DependentPhone as TDependentPhone } from "../api/dependentPhone/DependentPhone";

export const DEPENDENTPHONE_TITLE_FIELD = "dependentsId";

export const DependentPhoneTitle = (record: TDependentPhone): string => {
  return record.dependentsId?.toString() || String(record.id);
};
