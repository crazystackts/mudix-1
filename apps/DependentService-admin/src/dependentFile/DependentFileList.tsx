import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPENDENTATTACHMENT_TITLE_FIELD } from "../dependentAttachment/DependentAttachmentTitle";

export const DependentFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DependentFiles"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
