import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DependentAttachmentTitle } from "../dependentAttachment/DependentAttachmentTitle";

export const DependentFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dependentAttachments.id"
          reference="DependentAttachment"
          label="Dependent Attachments"
        >
          <SelectInput optionText={DependentAttachmentTitle} />
        </ReferenceInput>
        <TextInput label="Filename" source="filename" />
        <TextInput label="Name" source="name" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
