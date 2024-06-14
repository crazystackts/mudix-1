import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AttachmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Group" source="group" />
        <TextInput label="Holder ID" source="holderId" />
      </SimpleForm>
    </Edit>
  );
};
