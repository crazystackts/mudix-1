import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  email?: StringNullableFilter;
  holderId?: StringFilter;
  id?: StringFilter;
};
