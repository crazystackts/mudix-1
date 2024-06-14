import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Channel" source="channel" />
        <div />
        <BooleanInput label="Finalize" source="finalize" />
        <div />
        <TextInput label="Ip" source="ip" />
        <BooleanInput label="Renewal" source="renewal" />
        <TextInput label="Step" source="step" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Worker ID" source="workerId" />
      </SimpleForm>
    </Edit>
  );
};
