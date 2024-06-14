import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cancellation Date" source="cancellationDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Item" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Price Category" source="priceCategory" />
        <TextField label="Price Description" source="priceDescription" />
        <TextField label="Qr Code" source="qrCode" />
        <TextField label="Refund Deadline" source="refundDeadline" />
        <TextField label="Seat Code" source="seatCode" />
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
