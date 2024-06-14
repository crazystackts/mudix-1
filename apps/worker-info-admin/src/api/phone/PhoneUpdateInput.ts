import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type PhoneUpdateInput = {
  holder?: HolderWhereUniqueInput;
  numberField?: string | null;
  typeField?: string | null;
};
