import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DependentContactWhereInput = {
  dependents?: DependentWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
};
