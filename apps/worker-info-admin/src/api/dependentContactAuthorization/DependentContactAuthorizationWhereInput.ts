import { DependentWhereUniqueInput } from "../dependent/DependentWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DependentContactAuthorizationWhereInput = {
  dependents?: DependentWhereUniqueInput;
  email?: BooleanNullableFilter;
  id?: StringFilter;
  push?: BooleanNullableFilter;
  sms?: BooleanNullableFilter;
};
