import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DependentContactAuthorizationWhereInput = {
  dependentsId?: StringFilter;
  email?: BooleanNullableFilter;
  id?: StringFilter;
  push?: BooleanNullableFilter;
  sms?: BooleanNullableFilter;
};
