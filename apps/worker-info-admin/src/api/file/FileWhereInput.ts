import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FileWhereInput = {
  attachmentsId?: StringFilter;
  filename?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
