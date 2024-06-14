import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
