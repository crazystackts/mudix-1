import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DependentFileTitle } from "../dependentFile/DependentFileTitle";

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
        <TextInput label="Dependents ID" source="dependentsId" />
        <TextInput label="Group" source="group" />
      </SimpleForm>
    </Create>
  );
};
