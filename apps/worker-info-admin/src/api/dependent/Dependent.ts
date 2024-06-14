import { JsonValue } from "type-fest";

export type Dependent = {
  affectionateFirstName: string | null;
  affectionateLastName: string | null;
  birthDate: Date | null;
  complete: boolean | null;
  credential: string | null;
  dependentAddresses: JsonValue;
  dependentAttachments: JsonValue;
  dependentContactAuthorizationId: string | null;
  dependentContacts: JsonValue;
  dependentDocuments: JsonValue;
  dependentPhones: JsonValue;
  education: string | null;
  exclude: boolean | null;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  maritalStatus: string | null;
  relationship: string | null;
  requestId: string;
  socialFirstName: string | null;
  socialLastName: string | null;
};
