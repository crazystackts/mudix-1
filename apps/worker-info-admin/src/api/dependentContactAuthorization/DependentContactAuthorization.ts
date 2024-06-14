import { Dependent } from "../dependent/Dependent";

export type DependentContactAuthorization = {
  dependents?: Dependent;
  email: boolean | null;
  id: string;
  push: boolean | null;
  sms: boolean | null;
};
