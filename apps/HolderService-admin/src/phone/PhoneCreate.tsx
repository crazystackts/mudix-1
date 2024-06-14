import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PhoneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
