import { DependentAttachment as TDependentAttachment } from "../api/dependentAttachment/DependentAttachment";

export const DEPENDENTATTACHMENT_TITLE_FIELD = "group";

export const DependentAttachmentTitle = (
  record: TDependentAttachment
): string => {
  return record.group?.toString() || String(record.id);
};
