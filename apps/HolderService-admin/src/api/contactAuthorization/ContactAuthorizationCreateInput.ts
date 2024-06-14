export type ContactAuthorizationCreateInput = {
  email?: boolean | null;
  holderId: string;
  push?: boolean | null;
  sms?: boolean | null;
};
