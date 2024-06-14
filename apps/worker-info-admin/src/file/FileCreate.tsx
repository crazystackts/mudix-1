import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttachmentTitle } from "../attachment/AttachmentTitle";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attachments.id"
          reference="Attachment"
          label="Attachments"
        >
          <SelectInput optionText={AttachmentTitle} />
        </ReferenceInput>
        <TextInput label="Filename" source="filename" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
