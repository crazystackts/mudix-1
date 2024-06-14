import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QueuePositionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QueuePositions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="joinedAt" label="Joined At" />
        <TextField label="Posicao Atual" source="posicaoAtual" />
        <TextField label="Priority Level" source="priorityLevel" />
        <ReferenceField label="Queues" source="queue.id" reference="Queue">
          <TextField source={QUEUE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Sessions"
          source="session.id"
          reference="Session"
        >
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
