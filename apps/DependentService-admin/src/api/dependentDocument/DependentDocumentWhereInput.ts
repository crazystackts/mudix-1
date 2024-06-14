import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DependentDocumentWhereInput = {
  dependentsId?: StringFilter;
  id?: StringFilter;
  issuer?: StringNullableFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
