import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Attachments ID" source="attachmentsId" />
        <TextField label="Filename" source="filename" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
