import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEPENDENTATTACHMENT_TITLE_FIELD } from "./DependentAttachmentTitle";
import { DEPENDENT_TITLE_FIELD } from "../dependent/DependentTitle";

export const DependentAttachmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Dependents"
          source="dependent.id"
          reference="Dependent"
        >
          <TextField source={DEPENDENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Group" source="group" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="DependentFile"
          target="attachment_id"
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
