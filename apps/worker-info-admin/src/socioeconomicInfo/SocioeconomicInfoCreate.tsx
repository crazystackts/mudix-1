import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HolderTitle } from "../holder/HolderTitle";

export const SocioeconomicInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Family Income Code" source="familyIncomeCode" />
        <TextInput label="Family Income Title" source="familyIncomeTitle" />
        <ReferenceInput source="holder.id" reference="Holder" label="Holder">
          <SelectInput optionText={HolderTitle} />
        </ReferenceInput>
        <TextInput label="Salary Code" source="salaryCode" />
        <TextInput label="Salary Title" source="salaryTitle" />
      </SimpleForm>
    </Create>
  );
};
