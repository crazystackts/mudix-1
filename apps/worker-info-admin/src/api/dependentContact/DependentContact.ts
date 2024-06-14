import { Dependent } from "../dependent/Dependent";

export type DependentContact = {
  dependents?: Dependent;
  email: string | null;
  id: string;
};
