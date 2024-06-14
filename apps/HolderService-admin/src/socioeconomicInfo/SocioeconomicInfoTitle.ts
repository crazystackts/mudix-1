import { SocioeconomicInfo as TSocioeconomicInfo } from "../api/socioeconomicInfo/SocioeconomicInfo";

export const SOCIOECONOMICINFO_TITLE_FIELD = "familyIncomeTitle";

export const SocioeconomicInfoTitle = (record: TSocioeconomicInfo): string => {
  return record.familyIncomeTitle?.toString() || String(record.id);
};
