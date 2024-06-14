import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { WORKER_TITLE_FIELD } from "./WorkerTitle";

export const WorkerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cnpj" source="cnpj" />
        <TextField label="Company Name" source="companyName" />
        <TextField label="Cpf" source="cpf" />
        <TextField label="Ctps Number" source="ctpsNumber" />
        <TextField label="Ctps Series" source="ctpsSeries" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Status" source="status" />
        <TextField label="Type Field" source="typeField" />
        <ReferenceManyField
          reference="Request"
          target="worker_id"
          label="Requests"
        >
          <Datagrid rowClick="show">
            <TextField label="Channel" source="channel" />
            <BooleanField label="Finalize" source="finalize" />
            <TextField label="ID" source="id" />
            <TextField label="Ip" source="ip" />
            <BooleanField label="Renewal" source="renewal" />
            <TextField label="Step" source="step" />
            <TextField label="Type Field" source="typeField" />
            <ReferenceField
              label="Worker"
              source="worker.id"
              reference="Worker"
            >
              <TextField source={WORKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
