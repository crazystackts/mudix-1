import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type ContactCreateInput = {
  email?: string | null;
  holder: HolderWhereUniqueInput;
};
