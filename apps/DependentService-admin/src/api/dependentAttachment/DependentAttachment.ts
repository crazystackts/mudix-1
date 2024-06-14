import { DependentFile } from "../dependentFile/DependentFile";

export type DependentAttachment = {
  dependentFiles?: Array<DependentFile>;
  dependentsId: string;
  group: string | null;
  id: string;
};
