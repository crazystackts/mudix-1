import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Event Classification" source="eventClassification" />
        <TextField label="Event Detail" source="eventDetail" />
        <TextField label="Event Duration" source="eventDuration" />
        <TextField label="Event Image" source="eventImage" />
        <TextField label="Event Name" source="eventName" />
        <TextField label="Event Status" source="eventStatus" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Unit" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Session"
          target="eventId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Max Tickets" source="maxTickets" />
            <TextField label="Remaining Tickets" source="remainingTickets" />
            <TextField label="Sale End Date" source="saleEndDate" />
            <TextField label="Sale Start Date" source="saleStartDate" />
            <TextField label="Session Date Time" source="sessionDateTime" />
            <TextField label="Session Status" source="sessionStatus" />
            <TextField label="Session Type" source="sessionType" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
