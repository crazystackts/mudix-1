import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EditedFieldShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Field Name" source="fieldName" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
