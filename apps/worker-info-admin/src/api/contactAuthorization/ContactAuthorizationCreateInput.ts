import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type ContactAuthorizationCreateInput = {
  email?: boolean | null;
  holder: HolderWhereUniqueInput;
  push?: boolean | null;
  sms?: boolean | null;
};
