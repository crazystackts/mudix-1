import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";

export const QueueHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QueueHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Posicao Atual" source="posicaoAtual" />
        <ReferenceField label="Queues" source="queue.id" reference="Queue">
          <TextField source={QUEUE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="recordedAt" label="Recorded At" />
        <TextField label="Status" source="status" />
      </Datagrid>
    </List>
  );
};
