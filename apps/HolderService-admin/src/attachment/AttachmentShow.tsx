import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AttachmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Files" source="files" />
        <TextField label="Group" source="group" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
