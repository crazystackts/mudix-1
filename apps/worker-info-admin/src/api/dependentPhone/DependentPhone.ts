import { Dependent } from "../dependent/Dependent";

export type DependentPhone = {
  dependents?: Dependent;
  id: string;
  numberField: string | null;
  typeField: string | null;
};
