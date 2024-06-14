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
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Customer Cpf" source="customerCpf" />
        <TextField label="Customer Credential" source="customerCredential" />
        <TextField label="Customer Name" source="customerName" />
        <TextField label="ID" source="id" />
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
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
