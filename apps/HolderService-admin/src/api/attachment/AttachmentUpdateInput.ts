import { InputJsonValue } from "../../types";

export type AttachmentUpdateInput = {
  files?: InputJsonValue;
  group?: string | null;
  holderId?: string;
};
