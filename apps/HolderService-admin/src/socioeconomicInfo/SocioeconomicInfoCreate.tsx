import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SocioeconomicInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Family Income Code" source="familyIncomeCode" />
        <TextInput label="Family Income Title" source="familyIncomeTitle" />
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Salary Code" source="salaryCode" />
        <TextInput label="Salary Title" source="salaryTitle" />
      </SimpleForm>
    </Create>
  );
};
