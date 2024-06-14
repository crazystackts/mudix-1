import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type PhoneCreateInput = {
  holder: HolderWhereUniqueInput;
  numberField?: string | null;
  typeField?: string | null;
};
