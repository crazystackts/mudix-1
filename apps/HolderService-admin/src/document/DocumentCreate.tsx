import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Issuer" source="issuer" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
