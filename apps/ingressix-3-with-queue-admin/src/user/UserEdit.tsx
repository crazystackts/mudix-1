import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { QueueActionTitle } from "../queueAction/QueueActionTitle";
import { QueuePositionTitle } from "../queuePosition/QueuePositionTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customers.id"
          reference="Customer"
          label="Customers"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="queueActions"
          reference="QueueAction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueActionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="queuePositions"
          reference="QueuePosition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueuePositionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Role" source="role" />
        <TextInput label="User Name" source="userName" />
      </SimpleForm>
    </Edit>
  );
};
