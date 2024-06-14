import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DependentContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Dependents ID" source="dependentsId" />
        <TextInput label="Email" source="email" />
      </SimpleForm>
    </Edit>
  );
};
