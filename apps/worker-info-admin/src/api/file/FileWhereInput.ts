import { AttachmentWhereUniqueInput } from "../attachment/AttachmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  attachments?: AttachmentWhereUniqueInput;
  filename?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
