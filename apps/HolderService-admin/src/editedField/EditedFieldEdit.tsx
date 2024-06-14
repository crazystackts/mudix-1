import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EditedFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Field Name" source="fieldName" />
        <TextInput label="Holder ID" source="holderId" />
      </SimpleForm>
    </Edit>
  );
};
