import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { LocationTitle } from "../location/LocationTitle";
import { SessionTitle } from "../session/SessionTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="categories.id"
          reference="Category"
          label="Categories"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Event Classification" source="eventClassification" />
        <TextInput label="Event Detail" source="eventDetail" />
        <DateTimeInput label="Event Duration" source="eventDuration" />
        <TextInput label="Event Image" source="eventImage" />
        <TextInput label="Event Name" source="eventName" />
        <TextInput label="Event Status" source="eventStatus" />
        <ReferenceInput
          source="locations.id"
          reference="Location"
          label="Locations"
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
        <ReferenceInput source="units.id" reference="Unit" label="Units">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
