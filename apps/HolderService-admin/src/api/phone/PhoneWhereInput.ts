import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PhoneWhereInput = {
  holderId?: StringFilter;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
