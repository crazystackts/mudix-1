import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DependentPhoneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Dependents ID" source="dependentsId" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
