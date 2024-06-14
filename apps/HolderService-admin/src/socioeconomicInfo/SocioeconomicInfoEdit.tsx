import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SocioeconomicInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Family Income Code" source="familyIncomeCode" />
        <TextInput label="Family Income Title" source="familyIncomeTitle" />
        <TextInput label="Holder ID" source="holderId" />
        <TextInput label="Salary Code" source="salaryCode" />
        <TextInput label="Salary Title" source="salaryTitle" />
      </SimpleForm>
    </Edit>
  );
};
