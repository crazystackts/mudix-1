export type DependentContactAuthorizationCreateInput = {
  dependentsId: string;
  email?: boolean | null;
  push?: boolean | null;
  sms?: boolean | null;
};
