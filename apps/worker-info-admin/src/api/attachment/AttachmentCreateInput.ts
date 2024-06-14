import { FileCreateNestedManyWithoutAttachmentsInput } from "./FileCreateNestedManyWithoutAttachmentsInput";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type AttachmentCreateInput = {
  files?: FileCreateNestedManyWithoutAttachmentsInput;
  group?: string | null;
  holder: HolderWhereUniqueInput;
};
