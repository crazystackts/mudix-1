import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
