import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AttachmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attachments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Files" source="files" />
        <TextField label="Group" source="group" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
