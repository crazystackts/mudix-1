import { Holder } from "../holder/Holder";

export type SocioeconomicInfo = {
  familyIncomeCode: string | null;
  familyIncomeTitle: string | null;
  holder?: Holder;
  id: string;
  salaryCode: string | null;
  salaryTitle: string | null;
};
