import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HolderTitle } from "../holder/HolderTitle";

export const SocioeconomicInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Family Income Code" source="familyIncomeCode" />
        <TextInput label="Family Income Title" source="familyIncomeTitle" />
        <ReferenceInput source="holder.id" reference="Holder" label="Holder">
          <SelectInput optionText={HolderTitle} />
        </ReferenceInput>
        <TextInput label="Salary Code" source="salaryCode" />
        <TextInput label="Salary Title" source="salaryTitle" />
      </SimpleForm>
    </Edit>
  );
};
