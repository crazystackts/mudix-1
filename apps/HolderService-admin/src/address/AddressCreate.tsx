import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Complement" source="complement" />
        <TextInput label="Holder ID" source="holderId" />
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
