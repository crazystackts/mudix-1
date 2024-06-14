import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HolderTitle } from "../holder/HolderTitle";

export const ContactAuthorizationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Email" source="email" />
        <ReferenceInput source="holder.id" reference="Holder" label="Holder">
          <SelectInput optionText={HolderTitle} />
        </ReferenceInput>
        <BooleanInput label="Push" source="push" />
        <BooleanInput label="Sms" source="sms" />
      </SimpleForm>
    </Edit>
  );
};
