import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttachmentTitle } from "../attachment/AttachmentTitle";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
