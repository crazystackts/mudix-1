import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Requests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Channel" source="channel" />
        <TextField label="Dependents" source="dependents" />
        <BooleanField label="Finalize" source="finalize" />
        <TextField label="Holder" source="holder" />
        <TextField label="ID" source="id" />
        <TextField label="Ip" source="ip" />
        <BooleanField label="Renewal" source="renewal" />
        <TextField label="Step" source="step" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Worker ID" source="workerId" />
      </Datagrid>
    </List>
  );
};
