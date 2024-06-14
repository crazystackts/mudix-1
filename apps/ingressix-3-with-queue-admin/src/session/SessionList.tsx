import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Events" source="event.id" reference="Event">
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
    </List>
  );
};
