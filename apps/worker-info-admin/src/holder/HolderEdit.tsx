import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { AttachmentTitle } from "../attachment/AttachmentTitle";
import { ContactAuthorizationTitle } from "../contactAuthorization/ContactAuthorizationTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { EditedFieldTitle } from "../editedField/EditedFieldTitle";
import { FilialTitle } from "../filial/FilialTitle";
import { PhoneTitle } from "../phone/PhoneTitle";
import { RequestTitle } from "../request/RequestTitle";
import { SocioeconomicInfoTitle } from "../socioeconomicInfo/SocioeconomicInfoTitle";

export const HolderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="addresses"
          reference="Address"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Affectionate First Name"
          source="affectionateFirstName"
        />
        <TextInput label="Affectionate Gender" source="affectionateGender" />
        <TextInput
          label="Affectionate Last Name"
          source="affectionateLastName"
        />
        <ReferenceArrayInput
          source="attachments"
          reference="Attachment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttachmentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Birth Date" source="birthDate" />
        <ReferenceInput
          source="contactAuthorization.id"
          reference="ContactAuthorization"
          label="Contact Authorization"
        >
          <SelectInput optionText={ContactAuthorizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="contacts"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="documents"
          reference="Document"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="editedFields"
          reference="EditedField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EditedFieldTitle} />
        </ReferenceArrayInput>
        <TextInput label="Education" source="education" />
        <ReferenceArrayInput
          source="filial"
          reference="Filial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FilialTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Marital Status" source="maritalStatus" />
        <TextInput label="password" source="password" />
        <ReferenceArrayInput
          source="phones"
          reference="Phone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PhoneTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="request.id" reference="Request" label="Request">
          <SelectInput optionText={RequestTitle} />
        </ReferenceInput>
        <TextInput label="Social First Name" source="socialFirstName" />
        <TextInput label="Social Gender" source="socialGender" />
        <TextInput label="Social Last Name" source="socialLastName" />
        <ReferenceArrayInput
          source="socioeconomicInfo"
          reference="SocioeconomicInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SocioeconomicInfoTitle} />
        </ReferenceArrayInput>
        <TextInput label="Token" source="token" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
