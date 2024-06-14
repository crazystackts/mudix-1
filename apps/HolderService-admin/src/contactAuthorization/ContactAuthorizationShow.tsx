import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const ContactAuthorizationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Email" source="email" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Push" source="push" />
        <BooleanField label="Sms" source="sms" />
      </SimpleShowLayout>
    </Show>
  );
};
