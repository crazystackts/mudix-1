import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const TicketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tickets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cancellation Date" source="cancellationDate" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Price Category" source="priceCategory" />
        <TextField label="Price Description" source="priceDescription" />
        <TextField label="Qr Code" source="qrCode" />
        <TextField label="Return Deadline" source="returnDeadline" />
        <TextField label="Seat Code" source="seatCode" />
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Ticket Status" source="ticketStatus" />
      </Datagrid>
    </List>
  );
};
