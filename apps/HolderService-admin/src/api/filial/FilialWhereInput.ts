import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FilialWhereInput = {
  firstName?: StringNullableFilter;
  holderId?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
