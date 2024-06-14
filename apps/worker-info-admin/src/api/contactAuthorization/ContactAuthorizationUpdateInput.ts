import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type ContactAuthorizationUpdateInput = {
  email?: boolean | null;
  holder?: HolderWhereUniqueInput;
  push?: boolean | null;
  sms?: boolean | null;
};
