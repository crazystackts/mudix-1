import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DependentAttachmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DependentAttachments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="Group" source="group" />
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
