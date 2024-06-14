import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueueTitle } from "../queue/QueueTitle";
import { UserTitle } from "../user/UserTitle";

export const QueueActionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Action Type" source="actionType" />
        <TextInput label="Details" source="details" />
        <ReferenceInput source="queues.id" reference="Queue" label="Queues">
          <SelectInput optionText={QueueTitle} />
        </ReferenceInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
