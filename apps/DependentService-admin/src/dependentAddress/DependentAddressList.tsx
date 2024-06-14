import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DependentAddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DependentAddresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <TextField label="Complement" source="complement" />
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="ID" source="id" />
        <TextField label="Neighborhood" source="neighborhood" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="State" source="state" />
        <TextField label="Street" source="street" />
        <TextField label="Title" source="title" />
        <TextField label="Zip" source="zip" />
      </Datagrid>
    </List>
  );
};
