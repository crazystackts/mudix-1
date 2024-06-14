import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DependentAddressWhereInput = {
  city?: StringNullableFilter;
  complement?: StringNullableFilter;
  dependents?: DependentWhereUniqueInput;
  id?: StringFilter;
  neighborhood?: StringNullableFilter;
  numberField?: IntNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  title?: StringNullableFilter;
  zip?: StringNullableFilter;
};
