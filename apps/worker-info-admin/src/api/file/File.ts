import { Attachment } from "../attachment/Attachment";

export type File = {
  attachments?: Attachment;
  filename: string | null;
  id: string;
  name: string | null;
  url: string | null;
};
