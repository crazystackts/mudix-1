import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ContactAuthorizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Email" source="email" />
        <TextInput label="Holder ID" source="holderId" />
        <BooleanInput label="Push" source="push" />
        <BooleanInput label="Sms" source="sms" />
      </SimpleForm>
    </Create>
  );
};
