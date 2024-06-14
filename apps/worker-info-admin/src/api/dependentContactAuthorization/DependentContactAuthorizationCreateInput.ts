import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentContactAuthorizationCreateInput = {
  dependents: DependentWhereUniqueInput;
  email?: boolean | null;
  push?: boolean | null;
  sms?: boolean | null;
};
