import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AttachmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Group" source="group" />
        <TextInput label="Holder ID" source="holderId" />
      </SimpleForm>
    </Create>
  );
};
