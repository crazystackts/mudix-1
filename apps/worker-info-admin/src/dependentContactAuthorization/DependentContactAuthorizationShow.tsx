import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import { DEPENDENT_TITLE_FIELD } from "../dependent/DependentTitle";

export const DependentContactAuthorizationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Dependents"
          source="dependent.id"
          reference="Dependent"
        >
          <TextField source={DEPENDENT_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="Push" source="push" />
        <BooleanField label="Sms" source="sms" />
      </SimpleShowLayout>
    </Show>
  );
};
