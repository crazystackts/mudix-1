import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EditedFieldWhereInput = {
  fieldName?: StringNullableFilter;
  holderId?: StringFilter;
  id?: StringFilter;
};
