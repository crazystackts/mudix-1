import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DependentPhoneWhereInput = {
  dependentsId?: StringFilter;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
