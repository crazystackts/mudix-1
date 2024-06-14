import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTACHMENT_TITLE_FIELD } from "../attachment/AttachmentTitle";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Files"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
