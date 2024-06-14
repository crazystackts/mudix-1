import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";

export const QueueHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Posicao Atual" source="posicaoAtual" />
        <ReferenceField label="Queues" source="queue.id" reference="Queue">
          <TextField source={QUEUE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="recordedAt" label="Recorded At" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
