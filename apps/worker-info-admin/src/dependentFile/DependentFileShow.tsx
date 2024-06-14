import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { DEPENDENTATTACHMENT_TITLE_FIELD } from "../dependentAttachment/DependentAttachmentTitle";

export const DependentFileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Dependent Attachments"
          source="dependentattachment.id"
          reference="DependentAttachment"
        >
          <TextField source={DEPENDENTATTACHMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Filename" source="filename" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
