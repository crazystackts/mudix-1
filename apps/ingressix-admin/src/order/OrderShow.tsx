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

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Acquisition Channel" source="acquisitionChannel" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="On Premises Uuid" source="onPremisesUuid" />
        <TextField
          label="Order Cancellation Date"
          source="orderCancellationDate"
        />
        <TextField
          label="Order Confirmation Date"
          source="orderConfirmationDate"
        />
        <TextField label="Order Creation Date" source="orderCreationDate" />
        <TextField label="Order Status" source="orderStatus" />
        <TextField label="Payment Method" source="paymentMethod" />
        <TextField label="Payment Uuid" source="paymentUuid" />
        <TextField label="Pix Code" source="pixCode" />
        <TextField label="Pix Expiration" source="pixExpiration" />
        <TextField label="Pix Expiration Time" source="pixExpirationTime" />
        <TextField label="Session Code" source="sessionCode" />
        <ReferenceManyField reference="Item" target="orderId" label="Items">
          <Datagrid rowClick="show">
            <TextField label="Date Time" source="dateTime" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PaymentHistory"
          target="orderId"
          label="PaymentHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Date" source="paymentDate" />
            <TextField label="Payment Method" source="paymentMethod" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
