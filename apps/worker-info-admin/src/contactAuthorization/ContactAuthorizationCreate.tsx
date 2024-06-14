import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HolderTitle } from "../holder/HolderTitle";

export const ContactAuthorizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Email" source="email" />
        <ReferenceInput source="holder.id" reference="Holder" label="Holder">
          <SelectInput optionText={HolderTitle} />
        </ReferenceInput>
        <BooleanInput label="Push" source="push" />
        <BooleanInput label="Sms" source="sms" />
      </SimpleForm>
    </Create>
  );
};
