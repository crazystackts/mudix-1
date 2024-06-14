import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactAuthorizationWhereInput = {
  email?: BooleanNullableFilter;
  holderId?: StringFilter;
  id?: StringFilter;
  push?: BooleanNullableFilter;
  sms?: BooleanNullableFilter;
};
