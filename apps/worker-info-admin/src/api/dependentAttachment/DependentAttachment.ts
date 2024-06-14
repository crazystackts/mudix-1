import { DependentFile } from "../dependentFile/DependentFile";
import { Dependent } from "../dependent/Dependent";

export type DependentAttachment = {
  dependentFiles?: Array<DependentFile>;
  dependents?: Dependent;
  group: string | null;
  id: string;
};
