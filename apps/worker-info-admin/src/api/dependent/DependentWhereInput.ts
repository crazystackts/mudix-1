import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DependentWhereInput = {
  affectionateFirstName?: StringNullableFilter;
  affectionateLastName?: StringNullableFilter;
  birthDate?: DateTimeNullableFilter;
  complete?: BooleanNullableFilter;
  credential?: StringNullableFilter;
  dependentAddresses?: JsonFilter;
  dependentAttachments?: JsonFilter;
  dependentContactAuthorizationId?: StringNullableFilter;
  dependentContacts?: JsonFilter;
  dependentDocuments?: JsonFilter;
  dependentPhones?: JsonFilter;
  education?: StringNullableFilter;
  exclude?: BooleanNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  maritalStatus?: StringNullableFilter;
  relationship?: StringNullableFilter;
  requestId?: StringFilter;
  socialFirstName?: StringNullableFilter;
  socialLastName?: StringNullableFilter;
};
