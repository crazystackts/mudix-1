import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const DependentContactAuthorizationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Dependents ID" source="dependentsId" />
        <BooleanField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="Push" source="push" />
        <BooleanField label="Sms" source="sms" />
      </SimpleShowLayout>
    </Show>
  );
};
