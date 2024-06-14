import { InputJsonValue } from "../../types";

export type AttachmentCreateInput = {
  files?: InputJsonValue;
  group?: string | null;
  holderId: string;
};
