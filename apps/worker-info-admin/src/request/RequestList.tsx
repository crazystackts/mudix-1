import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKER_TITLE_FIELD } from "../worker/WorkerTitle";

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
        <BooleanField label="Finalize" source="finalize" />
        <TextField label="ID" source="id" />
        <TextField label="Ip" source="ip" />
        <BooleanField label="Renewal" source="renewal" />
        <TextField label="Step" source="step" />
        <TextField label="Type Field" source="typeField" />
        <ReferenceField label="Worker" source="worker.id" reference="Worker">
          <TextField source={WORKER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
