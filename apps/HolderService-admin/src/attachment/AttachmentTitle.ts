import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "group";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.group?.toString() || String(record.id);
};
