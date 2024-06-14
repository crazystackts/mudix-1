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
        <TextField label="Cancellation Date" source="cancellationDate" />
        <TextField label="Confirmation Date" source="confirmationDate" />
        <TextField label="Creation Date" source="creationDate" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Order Status" source="orderStatus" />
        <TextField label="Payment Method" source="paymentMethod" />
        <TextField label="Payment Uuid Crd" source="paymentUuidCrd" />
        <TextField
          label="Payment Uuid On Premises"
          source="paymentUuidOnPremises"
        />
        <TextField label="Pix Code" source="pixCode" />
        <TextField label="Pix Expiration Date" source="pixExpirationDate" />
        <TextField label="Pix Expiration Time" source="pixExpirationTime" />
        <ReferenceField label="Session" source="session.id" reference="Session">
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="OrderItem"
          target="orderId"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Order Item Date Time"
              source="orderItemDateTime"
            />
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
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Date" source="paymentDate" />
            <TextField label="Payment Method" source="paymentMethod" />
            <TextField label="Payment Status" source="paymentStatus" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
