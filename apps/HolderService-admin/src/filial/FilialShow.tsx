import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FilialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="firstName" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
