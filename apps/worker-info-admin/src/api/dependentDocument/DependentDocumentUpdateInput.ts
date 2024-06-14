import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentDocumentUpdateInput = {
  dependents?: DependentWhereUniqueInput;
  issuer?: string | null;
  numberField?: string | null;
  typeField?: string | null;
};
