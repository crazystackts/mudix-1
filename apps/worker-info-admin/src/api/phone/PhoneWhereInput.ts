import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PhoneWhereInput = {
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
