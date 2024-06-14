import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";

export type DependentContactAuthorizationUpdateInput = {
  dependents?: DependentWhereUniqueInput;
  email?: boolean | null;
  push?: boolean | null;
  sms?: boolean | null;
};
