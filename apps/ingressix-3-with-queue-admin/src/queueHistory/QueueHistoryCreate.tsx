import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { QueueTitle } from "../queue/QueueTitle";

export const QueueHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Posicao Atual" source="posicaoAtual" />
        <ReferenceInput source="queues.id" reference="Queue" label="Queues">
          <SelectInput optionText={QueueTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
