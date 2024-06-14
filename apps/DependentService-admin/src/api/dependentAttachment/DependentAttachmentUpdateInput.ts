import { DependentFileUpdateManyWithoutDependentAttachmentsInput } from "./DependentFileUpdateManyWithoutDependentAttachmentsInput";

export type DependentAttachmentUpdateInput = {
  dependentFiles?: DependentFileUpdateManyWithoutDependentAttachmentsInput;
  dependentsId?: string;
  group?: string | null;
};
