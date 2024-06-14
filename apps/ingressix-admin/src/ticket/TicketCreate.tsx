import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";
import { SessionTitle } from "../session/SessionTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Cancellation Date" source="cancellationDate" />
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <TextInput label="Price Category" source="priceCategory" />
        <TextInput label="Price Description" source="priceDescription" />
        <TextInput label="Qr Code" source="qrCode" />
        <DateTimeInput label="Refund Deadline" source="refundDeadline" />
        <TextInput label="Seat Code" source="seatCode" />
        <ReferenceInput source="session.id" reference="Session" label="Session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
