import { DependentFile as TDependentFile } from "../api/dependentFile/DependentFile";

export const DEPENDENTFILE_TITLE_FIELD = "filename";

export const DependentFileTitle = (record: TDependentFile): string => {
  return record.filename?.toString() || String(record.id);
};
