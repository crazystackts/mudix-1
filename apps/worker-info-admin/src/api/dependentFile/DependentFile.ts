import { DependentAttachment } from "../dependentAttachment/DependentAttachment";

export type DependentFile = {
  dependentAttachments?: DependentAttachment;
  filename: string | null;
  id: string;
  name: string | null;
  url: string | null;
};
