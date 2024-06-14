import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DependentPhoneWhereInput = {
  dependents?: DependentWhereUniqueInput;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
