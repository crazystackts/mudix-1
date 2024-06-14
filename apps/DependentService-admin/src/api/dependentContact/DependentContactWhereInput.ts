import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DependentContactWhereInput = {
  dependentsId?: StringFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
};
