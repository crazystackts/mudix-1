import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
