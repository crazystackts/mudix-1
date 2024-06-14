import { AttachmentWhereUniqueInput } from "../attachment/AttachmentWhereUniqueInput";

export type FileUpdateInput = {
  attachments?: AttachmentWhereUniqueInput;
  filename?: string | null;
  name?: string | null;
  url?: string | null;
};
