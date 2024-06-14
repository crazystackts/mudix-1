import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DependentTitle } from "../dependent/DependentTitle";

export const DependentPhoneEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dependents.id"
          reference="Dependent"
          label="Dependents"
        >
          <SelectInput optionText={DependentTitle} />
        </ReferenceInput>
        <TextInput label="Number Field" source="numberField" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
