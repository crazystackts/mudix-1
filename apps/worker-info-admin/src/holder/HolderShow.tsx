import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const HolderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Addresses" source="addresses" />
        <TextField
          label="Affectionate First Name"
          source="affectionateFirstName"
        />
        <TextField label="Affectionate Gender" source="affectionateGender" />
        <TextField
          label="Affectionate Last Name"
          source="affectionateLastName"
        />
        <TextField label="Attachments" source="attachments" />
        <TextField label="Birth Date" source="birthDate" />
        <TextField
          label="Contact Authorization ID"
          source="contactAuthorizationId"
        />
        <TextField label="Contacts" source="contacts" />
        <TextField label="Documents" source="documents" />
        <TextField label="Edited Fields" source="editedFields" />
        <TextField label="Education" source="education" />
        <TextField label="Filial" source="filial" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Marital Status" source="maritalStatus" />
        <TextField label="password" source="password" />
        <TextField label="Phones" source="phones" />
        <TextField label="Request ID" source="requestId" />
        <TextField label="Social First Name" source="socialFirstName" />
        <TextField label="Social Gender" source="socialGender" />
        <TextField label="Social Last Name" source="socialLastName" />
        <TextField label="Socioeconomic Info" source="socioeconomicInfo" />
        <TextField label="Token" source="token" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
