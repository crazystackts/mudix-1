import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FilialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
