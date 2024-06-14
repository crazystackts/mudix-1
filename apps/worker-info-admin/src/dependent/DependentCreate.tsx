import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

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
        <div />
        <div />
        <TextInput
          label="Dependent Contact Authorization ID"
          source="dependentContactAuthorizationId"
        />
        <div />
        <div />
        <div />
        <TextInput label="Education" source="education" />
        <BooleanInput label="Exclude" source="exclude" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Marital Status" source="maritalStatus" />
        <TextInput label="Relationship" source="relationship" />
        <TextInput label="Request ID" source="requestId" />
        <TextInput label="Social First Name" source="socialFirstName" />
        <TextInput label="Social Last Name" source="socialLastName" />
      </SimpleForm>
    </Create>
  );
};
