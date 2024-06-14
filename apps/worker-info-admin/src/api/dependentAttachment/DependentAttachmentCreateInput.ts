import { DependentFileCreateNestedManyWithoutDependentAttachmentsInput } from "./DependentFileCreateNestedManyWithoutDependentAttachmentsInput";
import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentAttachmentCreateInput = {
  dependentFiles?: DependentFileCreateNestedManyWithoutDependentAttachmentsInput;
  dependents: DependentWhereUniqueInput;
  group?: string | null;
};
