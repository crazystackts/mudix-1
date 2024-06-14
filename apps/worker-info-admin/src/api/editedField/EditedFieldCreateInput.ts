import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type EditedFieldCreateInput = {
  fieldName?: string | null;
  holder: HolderWhereUniqueInput;
};
