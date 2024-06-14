import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FilialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
