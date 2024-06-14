import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type ContactUpdateInput = {
  email?: string | null;
  holder?: HolderWhereUniqueInput;
};
