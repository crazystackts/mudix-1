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

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cpf" source="cpf" />
        <TextField label="Credential" source="credential" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="Order"
          target="customerId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Acquisition Channel"
              source="acquisitionChannel"
            />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
