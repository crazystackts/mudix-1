import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category Name" source="categoryName" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="Event"
          target="categoryId"
          label="Events"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Categories"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Event Classification"
              source="eventClassification"
            />
            <TextField label="Event Detail" source="eventDetail" />
            <TextField label="Event Duration" source="eventDuration" />
            <TextField label="Event Image" source="eventImage" />
            <TextField label="Event Name" source="eventName" />
            <TextField label="Event Status" source="eventStatus" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Locations"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Units" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
