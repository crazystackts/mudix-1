import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DependentAttachmentTitle } from "../dependentAttachment/DependentAttachmentTitle";

export const DependentFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
