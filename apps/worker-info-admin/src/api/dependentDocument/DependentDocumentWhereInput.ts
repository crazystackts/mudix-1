import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DependentDocumentWhereInput = {
  dependents?: DependentWhereUniqueInput;
  id?: StringFilter;
  issuer?: StringNullableFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
