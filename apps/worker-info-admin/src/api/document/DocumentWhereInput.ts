import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DocumentWhereInput = {
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
  issuer?: StringNullableFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
