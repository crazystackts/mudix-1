import { DependentFileListRelationFilter } from "../dependentFile/DependentFileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DependentAttachmentWhereInput = {
  dependentFiles?: DependentFileListRelationFilter;
  dependentsId?: StringFilter;
  group?: StringNullableFilter;
  id?: StringFilter;
};
