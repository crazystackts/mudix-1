import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DependentFileTitle } from "../dependentFile/DependentFileTitle";
import { DependentTitle } from "../dependent/DependentTitle";

export const DependentAttachmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="dependentFiles"
          reference="DependentFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DependentFileTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="dependents.id"
          reference="Dependent"
          label="Dependents"
        >
          <SelectInput optionText={DependentTitle} />
        </ReferenceInput>
        <TextInput label="Group" source="group" />
      </SimpleForm>
    </Create>
  );
};
