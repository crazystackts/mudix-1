import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DependentPhoneList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DependentPhones"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="ID" source="id" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="Type Field" source="typeField" />
      </Datagrid>
    </List>
  );
};
