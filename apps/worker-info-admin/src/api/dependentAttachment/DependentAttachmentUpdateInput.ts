import { DependentFileUpdateManyWithoutDependentAttachmentsInput } from "./DependentFileUpdateManyWithoutDependentAttachmentsInput";
import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentAttachmentUpdateInput = {
  dependentFiles?: DependentFileUpdateManyWithoutDependentAttachmentsInput;
  dependents?: DependentWhereUniqueInput;
  group?: string | null;
};
