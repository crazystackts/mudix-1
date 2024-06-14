import { DependentAttachmentWhereUniqueInput } from "../dependentAttachment/DependentAttachmentWhereUniqueInput";

export type DependentFileUpdateInput = {
  dependentAttachments?: DependentAttachmentWhereUniqueInput;
  filename?: string | null;
  name?: string | null;
  url?: string | null;
};
