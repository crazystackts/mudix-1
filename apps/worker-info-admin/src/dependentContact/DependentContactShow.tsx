import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { DEPENDENT_TITLE_FIELD } from "../dependent/DependentTitle";

export const DependentContactShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
