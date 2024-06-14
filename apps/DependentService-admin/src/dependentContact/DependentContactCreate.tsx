import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DependentContactCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Dependents ID" source="dependentsId" />
        <TextInput label="Email" source="email" />
      </SimpleForm>
    </Create>
  );
};
