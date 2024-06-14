import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentContactCreateInput = {
  dependents: DependentWhereUniqueInput;
  email?: string | null;
};
