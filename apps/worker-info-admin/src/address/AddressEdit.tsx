import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { HolderTitle } from "../holder/HolderTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Complement" source="complement" />
        <ReferenceInput source="holder.id" reference="Holder" label="Holder">
          <SelectInput optionText={HolderTitle} />
        </ReferenceInput>
        <TextInput label="Neighborhood" source="neighborhood" />
        <NumberInput step={1} label="Number Field" source="numberField" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
        <TextInput label="Title" source="title" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
