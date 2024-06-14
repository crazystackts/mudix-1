import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QueueActionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
