import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SocioeconomicInfoWhereInput = {
  familyIncomeCode?: StringNullableFilter;
  familyIncomeTitle?: StringNullableFilter;
  holderId?: StringFilter;
  id?: StringFilter;
  salaryCode?: StringNullableFilter;
  salaryTitle?: StringNullableFilter;
};
