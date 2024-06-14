import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WorkerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Workers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cnpj" source="cnpj" />
        <TextField label="Company Name" source="companyName" />
        <TextField label="Cpf" source="cpf" />
        <TextField label="Ctps Number" source="ctpsNumber" />
        <TextField label="Ctps Series" source="ctpsSeries" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Status" source="status" />
        <TextField label="Type Field" source="typeField" />
      </Datagrid>
    </List>
  );
};
