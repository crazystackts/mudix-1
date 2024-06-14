import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  complement?: StringNullableFilter;
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
  neighborhood?: StringNullableFilter;
  numberField?: IntNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  title?: StringNullableFilter;
  zip?: StringNullableFilter;
};
