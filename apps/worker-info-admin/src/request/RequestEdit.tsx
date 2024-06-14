import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DependentTitle } from "../dependent/DependentTitle";
import { HolderTitle } from "../holder/HolderTitle";
import { WorkerTitle } from "../worker/WorkerTitle";

export const RequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Channel" source="channel" />
        <ReferenceArrayInput
          source="dependents"
          reference="Dependent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Finalize" source="finalize" />
        <ReferenceArrayInput
          source="holder"
          reference="Holder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HolderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Ip" source="ip" />
        <BooleanInput label="Renewal" source="renewal" />
        <TextInput label="Step" source="step" />
        <TextInput label="Type Field" source="typeField" />
        <ReferenceInput source="worker.id" reference="Worker" label="Worker">
          <SelectInput optionText={WorkerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
