import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Cancellation Date" source="cancellationDate" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Price Category" source="priceCategory" />
        <TextInput label="Price Description" source="priceDescription" />
        <TextInput label="Qr Code" source="qrCode" />
        <DateTimeInput label="Return Deadline" source="returnDeadline" />
        <TextInput label="Seat Code" source="seatCode" />
        <ReferenceInput
          source="sessions.id"
          reference="Session"
          label="Sessions"
        >
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <TextInput label="Ticket Status" source="ticketStatus" />
      </SimpleForm>
    </Create>
  );
};
