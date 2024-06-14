import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { PaymentHistoryTitle } from "../paymentHistory/PaymentHistoryTitle";
import { SessionTitle } from "../session/SessionTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Acquisition Channel" source="acquisitionChannel" />
        <DateTimeInput label="Cancellation Date" source="cancellationDate" />
        <DateTimeInput label="Confirmation Date" source="confirmationDate" />
        <DateTimeInput label="Creation Date" source="creationDate" />
        <ReferenceInput
          source="customers.id"
          reference="Customer"
          label="Customers"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Order Status" source="orderStatus" />
        <ReferenceArrayInput
          source="paymentHistory"
          reference="PaymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Payment Method" source="paymentMethod" />
        <TextInput label="Payment Uuid Crd" source="paymentUuidCrd" />
        <TextInput
          label="Payment Uuid On Premises"
          source="paymentUuidOnPremises"
        />
        <TextInput label="Pix Code" source="pixCode" />
        <DateTimeInput label="Pix Expiration Date" source="pixExpirationDate" />
        <DateTimeInput label="Pix Expiration Time" source="pixExpirationTime" />
        <ReferenceInput
          source="sessions.id"
          reference="Session"
          label="Sessions"
        >
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
