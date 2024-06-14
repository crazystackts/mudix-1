import { DependentAttachmentWhereUniqueInput } from "../dependentAttachment/DependentAttachmentWhereUniqueInput";

export type DependentFileCreateInput = {
  dependentAttachments?: DependentAttachmentWhereUniqueInput | null;
  filename?: string | null;
  name?: string | null;
  url?: string | null;
};
