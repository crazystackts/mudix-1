import { DependentAttachmentWhereUniqueInput } from "../dependentAttachment/DependentAttachmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DependentFileWhereInput = {
  dependentAttachments?: DependentAttachmentWhereUniqueInput;
  filename?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
