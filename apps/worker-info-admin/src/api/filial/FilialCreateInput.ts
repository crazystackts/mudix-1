import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type FilialCreateInput = {
  firstName?: string | null;
  holder: HolderWhereUniqueInput;
  lastName?: string | null;
  typeField?: string | null;
};
