import { DependentAttachment } from "../dependentAttachment/DependentAttachment";

export type DependentFile = {
  dependentAttachments?: DependentAttachment | null;
  filename: string | null;
  id: string;
  name: string | null;
  url: string | null;
};
