import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Acquisition Channel" source="acquisitionChannel" />
        <TextField label="Cancellation Date" source="cancellationDate" />
        <TextField label="Confirmation Date" source="confirmationDate" />
        <TextField label="Creation Date" source="creationDate" />
        <ReferenceField
          label="Customers"
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
          label="Sessions"
          source="session.id"
          reference="Session"
        >
          <TextField source={SESSION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
