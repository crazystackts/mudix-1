import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Issuer" source="issuer" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
