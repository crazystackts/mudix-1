import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Attachments ID" source="attachmentsId" />
        <TextInput label="Filename" source="filename" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
