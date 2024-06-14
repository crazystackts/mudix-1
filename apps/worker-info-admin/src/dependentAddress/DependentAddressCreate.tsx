import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DependentTitle } from "../dependent/DependentTitle";

export const DependentAddressCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Complement" source="complement" />
        <ReferenceInput
          source="dependents.id"
          reference="Dependent"
          label="Dependents"
        >
          <SelectInput optionText={DependentTitle} />
        </ReferenceInput>
        <TextInput label="Neighborhood" source="neighborhood" />
        <NumberInput step={1} label="Number Field" source="numberField" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
        <TextInput label="Title" source="title" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Create>
  );
};
