import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SocioeconomicInfoWhereInput = {
  familyIncomeCode?: StringNullableFilter;
  familyIncomeTitle?: StringNullableFilter;
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
  salaryCode?: StringNullableFilter;
  salaryTitle?: StringNullableFilter;
};
