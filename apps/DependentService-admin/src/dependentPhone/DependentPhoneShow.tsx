import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DependentPhoneShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="ID" source="id" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
