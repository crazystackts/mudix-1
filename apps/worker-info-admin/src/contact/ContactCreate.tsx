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

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <ReferenceInput source="holder.id" reference="Holder" label="Holder">
          <SelectInput optionText={HolderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
