import { Dependent } from "../dependent/Dependent";

export type DependentDocument = {
  dependents?: Dependent;
  id: string;
  issuer: string | null;
  numberField: string | null;
  typeField: string | null;
};
