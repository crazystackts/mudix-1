import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ITEM_TITLE_FIELD } from "./ItemTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Date Time" source="dateTime" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Ticket" target="itemId" label="Tickets">
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
