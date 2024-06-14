import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DependentPhoneCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Dependents ID" source="dependentsId" />
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
