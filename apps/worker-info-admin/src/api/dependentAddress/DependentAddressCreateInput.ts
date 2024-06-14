import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentAddressCreateInput = {
  city?: string | null;
  complement?: string | null;
  dependents: DependentWhereUniqueInput;
  neighborhood?: string | null;
  numberField?: number | null;
  state?: string | null;
  street?: string | null;
  title?: string | null;
  zip?: string | null;
};
