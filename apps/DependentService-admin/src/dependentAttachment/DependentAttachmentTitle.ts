import { DependentAttachment as TDependentAttachment } from "../api/dependentAttachment/DependentAttachment";

export const DEPENDENTATTACHMENT_TITLE_FIELD = "dependentsId";

export const DependentAttachmentTitle = (
  record: TDependentAttachment
): string => {
  return record.dependentsId?.toString() || String(record.id);
};
