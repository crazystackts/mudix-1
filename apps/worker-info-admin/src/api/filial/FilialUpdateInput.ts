import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type FilialUpdateInput = {
  firstName?: string | null;
  holder?: HolderWhereUniqueInput;
  lastName?: string | null;
  typeField?: string | null;
};
