import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FilialWhereInput = {
  firstName?: StringNullableFilter;
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
