import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEPENDENTATTACHMENT_TITLE_FIELD } from "./DependentAttachmentTitle";

export const DependentAttachmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="Group" source="group" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="DependentFile"
          target="dependentAttachmentsId"
          label="DependentFiles"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
