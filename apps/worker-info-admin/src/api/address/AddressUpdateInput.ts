import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";

export type AddressUpdateInput = {
  city?: string | null;
  complement?: string | null;
  holder?: HolderWhereUniqueInput;
  neighborhood?: string | null;
  numberField?: number | null;
  state?: string | null;
  street?: string | null;
  title?: string | null;
  zip?: string | null;
};
