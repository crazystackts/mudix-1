import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentPhoneUpdateInput = {
  dependents?: DependentWhereUniqueInput;
  numberField?: string | null;
  typeField?: string | null;
};
