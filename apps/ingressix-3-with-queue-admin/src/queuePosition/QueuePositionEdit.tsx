import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueueTitle } from "../queue/QueueTitle";
import { SessionTitle } from "../session/SessionTitle";
import { UserTitle } from "../user/UserTitle";

export const QueuePositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Posicao Atual" source="posicaoAtual" />
        <NumberInput step={1} label="Priority Level" source="priorityLevel" />
        <ReferenceInput source="queues.id" reference="Queue" label="Queues">
          <SelectInput optionText={QueueTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="sessions.id"
          reference="Session"
          label="Sessions"
        >
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
