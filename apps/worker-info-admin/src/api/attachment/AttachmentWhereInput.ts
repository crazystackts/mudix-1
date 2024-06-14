import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AttachmentWhereInput = {
  files?: FileListRelationFilter;
  group?: StringNullableFilter;
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
};
