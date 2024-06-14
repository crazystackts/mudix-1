import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUEUE_TITLE_FIELD } from "./QueueTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const QueueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="queue_id"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Message" source="message" />
            <ReferenceField label="Queues" source="queue.id" reference="Queue">
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="sentAt" label="Sent At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QueueAction"
          target="queue_id"
          label="QueueActions"
        >
          <Datagrid rowClick="show">
            <DateField source="actionTimestamp" label="Action Timestamp" />
            <TextField label="Action Type" source="actionType" />
            <TextField label="Details" source="details" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Queues" source="queue.id" reference="Queue">
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QueueHistory"
          target="queue_id"
          label="QueueHistories"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="QueuePosition"
          target="queue_id"
          label="QueuePositions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
