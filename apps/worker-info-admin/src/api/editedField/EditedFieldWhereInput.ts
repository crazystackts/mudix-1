import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type EditedFieldWhereInput = {
  fieldName?: StringNullableFilter;
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
};
