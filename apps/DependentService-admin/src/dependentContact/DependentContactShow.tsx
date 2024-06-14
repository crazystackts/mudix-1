import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DependentContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
