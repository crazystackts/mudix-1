import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DependentAddressWhereInput = {
  city?: StringNullableFilter;
  complement?: StringNullableFilter;
  dependentsId?: StringFilter;
  id?: StringFilter;
  neighborhood?: StringNullableFilter;
  numberField?: IntNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  title?: StringNullableFilter;
  zip?: StringNullableFilter;
};
