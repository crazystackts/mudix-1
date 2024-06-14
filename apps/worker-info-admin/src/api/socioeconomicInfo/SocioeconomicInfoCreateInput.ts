import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type SocioeconomicInfoCreateInput = {
  familyIncomeCode?: string | null;
  familyIncomeTitle?: string | null;
  holder: HolderWhereUniqueInput;
  salaryCode?: string | null;
  salaryTitle?: string | null;
};
