import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type DocumentCreateInput = {
  holder: HolderWhereUniqueInput;
  issuer?: string | null;
  numberField?: string | null;
  typeField?: string | null;
};
