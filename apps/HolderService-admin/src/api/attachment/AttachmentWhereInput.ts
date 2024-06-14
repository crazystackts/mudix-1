import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttachmentWhereInput = {
  files?: JsonFilter;
  group?: StringNullableFilter;
  holderId?: StringFilter;
  id?: StringFilter;
};
