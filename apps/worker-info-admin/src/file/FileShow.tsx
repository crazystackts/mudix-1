import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ATTACHMENT_TITLE_FIELD } from "../attachment/AttachmentTitle";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Attachments"
          source="attachment.id"
          reference="Attachment"
        >
          <TextField source={ATTACHMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Filename" source="filename" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
