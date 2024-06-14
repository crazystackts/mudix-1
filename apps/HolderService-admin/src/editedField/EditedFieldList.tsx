import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EditedFieldList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EditedFields"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Field Name" source="fieldName" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
