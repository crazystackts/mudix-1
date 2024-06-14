import { JsonValue } from "type-fest";

export type Attachment = {
  files: JsonValue;
  group: string | null;
  holderId: string;
  id: string;
};
