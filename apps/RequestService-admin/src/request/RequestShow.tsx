import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Channel" source="channel" />
        <TextField label="Dependents" source="dependents" />
        <BooleanField label="Finalize" source="finalize" />
        <TextField label="Holder" source="holder" />
        <TextField label="ID" source="id" />
        <TextField label="Ip" source="ip" />
        <BooleanField label="Renewal" source="renewal" />
        <TextField label="Step" source="step" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Worker ID" source="workerId" />
      </SimpleShowLayout>
    </Show>
  );
};
