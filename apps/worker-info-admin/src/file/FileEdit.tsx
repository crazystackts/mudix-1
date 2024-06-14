import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Attachments ID" source="attachmentsId" />
        <TextInput label="Filename" source="filename" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
