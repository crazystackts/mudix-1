import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentContactUpdateInput = {
  dependents?: DependentWhereUniqueInput;
  email?: string | null;
};
