import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Customers"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Role" source="role" />
        <TextField label="User Name" source="userName" />
        <ReferenceManyField
          reference="Notification"
          target="user_id"
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
          target="user_id"
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
          reference="QueuePosition"
          target="user_id"
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
