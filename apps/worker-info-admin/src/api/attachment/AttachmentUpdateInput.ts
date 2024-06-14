import { FileUpdateManyWithoutAttachmentsInput } from "./FileUpdateManyWithoutAttachmentsInput";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type AttachmentUpdateInput = {
  files?: FileUpdateManyWithoutAttachmentsInput;
  group?: string | null;
  holder?: HolderWhereUniqueInput;
};
