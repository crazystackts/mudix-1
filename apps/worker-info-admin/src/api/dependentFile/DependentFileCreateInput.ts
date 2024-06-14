import { DependentAttachmentWhereUniqueInput } from "../dependentAttachment/DependentAttachmentWhereUniqueInput";

export type DependentFileCreateInput = {
  dependentAttachments: DependentAttachmentWhereUniqueInput;
  filename?: string | null;
  name?: string | null;
  url?: string | null;
};
