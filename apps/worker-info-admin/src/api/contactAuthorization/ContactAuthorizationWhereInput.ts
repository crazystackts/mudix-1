import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { HolderWhereUniqueInput } from "../holder/HolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ContactAuthorizationWhereInput = {
  email?: BooleanNullableFilter;
  holder?: HolderWhereUniqueInput;
  id?: StringFilter;
  push?: BooleanNullableFilter;
  sms?: BooleanNullableFilter;
};
