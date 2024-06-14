import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DependentAddressTitle } from "../dependentAddress/DependentAddressTitle";
import { DependentAttachmentTitle } from "../dependentAttachment/DependentAttachmentTitle";
import { DependentContactAuthorizationTitle } from "../dependentContactAuthorization/DependentContactAuthorizationTitle";
import { DependentContactTitle } from "../dependentContact/DependentContactTitle";
import { DependentDocumentTitle } from "../dependentDocument/DependentDocumentTitle";
import { DependentPhoneTitle } from "../dependentPhone/DependentPhoneTitle";
import { RequestTitle } from "../request/RequestTitle";

export const DependentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="Affectionate First Name"
          source="affectionateFirstName"
        />
        <TextInput
          label="Affectionate Last Name"
          source="affectionateLastName"
        />
        <DateTimeInput label="Birth Date" source="birthDate" />
        <BooleanInput label="Complete" source="complete" />
        <TextInput label="Credential" source="credential" />
        <ReferenceArrayInput
          source="dependentAddresses"
          reference="DependentAddress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentAddressTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dependentAttachments"
          reference="DependentAttachment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentAttachmentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="dependentContactAuthorization.id"
          reference="DependentContactAuthorization"
          label="Dependent Contact Authorization"
        >
          <SelectInput optionText={DependentContactAuthorizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="dependentContacts"
          reference="DependentContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dependentDocuments"
          reference="DependentDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentDocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dependentPhones"
          reference="DependentPhone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentPhoneTitle} />
        </ReferenceArrayInput>
        <TextInput label="Education" source="education" />
        <BooleanInput label="Exclude" source="exclude" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Marital Status" source="maritalStatus" />
        <TextInput label="Relationship" source="relationship" />
        <ReferenceInput source="request.id" reference="Request" label="Request">
          <SelectInput optionText={RequestTitle} />
        </ReferenceInput>
        <TextInput label="Social First Name" source="socialFirstName" />
        <TextInput label="Social Last Name" source="socialLastName" />
      </SimpleForm>
    </Create>
  );
};
