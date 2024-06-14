import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentDocumentCreateInput = {
  dependents: DependentWhereUniqueInput;
  issuer?: string | null;
  numberField?: string | null;
  typeField?: string | null;
};
