import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentPhoneCreateInput = {
  dependents: DependentWhereUniqueInput;
  numberField?: string | null;
  typeField?: string | null;
};
