import { Dependent } from "../dependent/Dependent";

export type DependentAddress = {
  city: string | null;
  complement: string | null;
  dependents?: Dependent;
  id: string;
  neighborhood: string | null;
  numberField: number | null;
  state: string | null;
  street: string | null;
  title: string | null;
  zip: string | null;
};
