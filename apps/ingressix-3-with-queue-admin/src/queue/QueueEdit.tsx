import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NotificationTitle } from "../notification/NotificationTitle";
import { QueueActionTitle } from "../queueAction/QueueActionTitle";
import { QueueHistoryTitle } from "../queueHistory/QueueHistoryTitle";
import { QueuePositionTitle } from "../queuePosition/QueuePositionTitle";

export const QueueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
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
          source="queueHistories"
          reference="QueueHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="queuePositions"
          reference="QueuePosition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueuePositionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
