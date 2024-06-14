import { DependentAttachmentWhereUniqueInput } from "../dependentAttachment/DependentAttachmentWhereUniqueInput";

export type DependentFileUpdateInput = {
  dependentAttachments?: DependentAttachmentWhereUniqueInput | null;
  filename?: string | null;
  name?: string | null;
  url?: string | null;
};
