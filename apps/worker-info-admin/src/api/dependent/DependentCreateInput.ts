import { InputJsonValue } from "../../types";

export type DependentCreateInput = {
  affectionateFirstName?: string | null;
  affectionateLastName?: string | null;
  birthDate?: Date | null;
  complete?: boolean | null;
  credential?: string | null;
  dependentAddresses?: InputJsonValue;
  dependentAttachments?: InputJsonValue;
  dependentContactAuthorizationId?: string | null;
  dependentContacts?: InputJsonValue;
  dependentDocuments?: InputJsonValue;
  dependentPhones?: InputJsonValue;
  education?: string | null;
  exclude?: boolean | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  maritalStatus?: string | null;
  relationship?: string | null;
  requestId: string;
  socialFirstName?: string | null;
  socialLastName?: string | null;
};
