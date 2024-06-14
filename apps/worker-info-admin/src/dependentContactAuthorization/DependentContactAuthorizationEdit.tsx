import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { DependentTitle } from "../dependent/DependentTitle";

export const DependentContactAuthorizationEdit = (
  props: EditProps
): React.ReactElement => {
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
        <BooleanInput label="Email" source="email" />
        <BooleanInput label="Push" source="push" />
        <BooleanInput label="Sms" source="sms" />
      </SimpleForm>
    </Edit>
  );
};
