import { File } from "../file/File";
import { Holder } from "../holder/Holder";

export type Attachment = {
  files?: Array<File>;
  group: string | null;
  holder?: Holder;
  id: string;
};
