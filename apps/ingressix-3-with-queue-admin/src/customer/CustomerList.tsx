import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Customer Cpf" source="customerCpf" />
        <TextField label="Customer Credential" source="customerCredential" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
