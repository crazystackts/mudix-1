import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PhoneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
