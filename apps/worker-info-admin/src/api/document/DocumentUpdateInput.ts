import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type DocumentUpdateInput = {
  holder?: HolderWhereUniqueInput;
  issuer?: string | null;
  numberField?: string | null;
  typeField?: string | null;
};
