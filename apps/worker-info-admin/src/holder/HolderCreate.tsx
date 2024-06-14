import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const HolderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput
          label="Affectionate First Name"
          source="affectionateFirstName"
        />
        <TextInput label="Affectionate Gender" source="affectionateGender" />
        <TextInput
          label="Affectionate Last Name"
          source="affectionateLastName"
        />
        <div />
        <DateTimeInput label="Birth Date" source="birthDate" />
        <TextInput
          label="Contact Authorization ID"
          source="contactAuthorizationId"
        />
        <div />
        <div />
        <div />
        <TextInput label="Education" source="education" />
        <div />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Marital Status" source="maritalStatus" />
        <TextInput label="password" source="password" />
        <div />
        <TextInput label="Request ID" source="requestId" />
        <TextInput label="Social First Name" source="socialFirstName" />
        <TextInput label="Social Gender" source="socialGender" />
        <TextInput label="Social Last Name" source="socialLastName" />
        <div />
        <TextInput label="Token" source="token" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
