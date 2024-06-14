import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTACHMENT_TITLE_FIELD } from "./AttachmentTitle";
import { HOLDER_TITLE_FIELD } from "../holder/HolderTitle";

export const AttachmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Group" source="group" />
        <ReferenceField label="Holder" source="holder.id" reference="Holder">
          <TextField source={HOLDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="File"
          target="attachment_id"
          label="Files"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
