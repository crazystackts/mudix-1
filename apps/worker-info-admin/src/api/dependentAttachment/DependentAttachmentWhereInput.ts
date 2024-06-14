import { DependentFileListRelationFilter } from "../dependentFile/DependentFileListRelationFilter";
import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DependentAttachmentWhereInput = {
  dependentFiles?: DependentFileListRelationFilter;
  dependents?: DependentWhereUniqueInput;
  group?: StringNullableFilter;
  id?: StringFilter;
};
