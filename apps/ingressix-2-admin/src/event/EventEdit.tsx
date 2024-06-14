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

import { CategoryTitle } from "../category/CategoryTitle";
import { LocationTitle } from "../location/LocationTitle";
import { SessionTitle } from "../session/SessionTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Event Classification" source="eventClassification" />
        <TextInput label="Event Detail" source="eventDetail" />
        <TextInput label="Event Duration" source="eventDuration" />
        <TextInput label="Event Image" source="eventImage" />
        <TextInput label="Event Name" source="eventName" />
        <TextInput label="Event Status" source="eventStatus" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="unit.id" reference="Unit" label="Unit">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
