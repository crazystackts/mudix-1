import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ContactAuthorizationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Email" source="email" />
        <TextInput label="Holder ID" source="holderId" />
        <BooleanInput label="Push" source="push" />
        <BooleanInput label="Sms" source="sms" />
      </SimpleForm>
    </Edit>
  );
};
