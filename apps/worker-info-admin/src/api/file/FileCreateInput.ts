import { AttachmentWhereUniqueInput } from "../attachment/AttachmentWhereUniqueInput";

export type FileCreateInput = {
  attachments: AttachmentWhereUniqueInput;
  filename?: string | null;
  name?: string | null;
  url?: string | null;
};
