import { DependentFileCreateNestedManyWithoutDependentAttachmentsInput } from "./DependentFileCreateNestedManyWithoutDependentAttachmentsInput";

export type DependentAttachmentCreateInput = {
  dependentFiles?: DependentFileCreateNestedManyWithoutDependentAttachmentsInput;
  dependentsId: string;
  group?: string | null;
};
