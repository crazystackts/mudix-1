import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { ItemTitle } from "../item/ItemTitle";
import { PaymentHistoryTitle } from "../paymentHistory/PaymentHistoryTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Acquisition Channel" source="acquisitionChannel" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="On Premises Uuid" source="onPremisesUuid" />
        <DateTimeInput
          label="Order Cancellation Date"
          source="orderCancellationDate"
        />
        <DateTimeInput
          label="Order Confirmation Date"
          source="orderConfirmationDate"
        />
        <DateTimeInput label="Order Creation Date" source="orderCreationDate" />
        <TextInput label="Order Status" source="orderStatus" />
        <ReferenceArrayInput
          source="paymentHistories"
          reference="PaymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Payment Method" source="paymentMethod" />
        <TextInput label="Payment Uuid" source="paymentUuid" />
        <TextInput label="Pix Code" source="pixCode" />
        <DateTimeInput label="Pix Expiration" source="pixExpiration" />
        <DateTimeInput label="Pix Expiration Time" source="pixExpirationTime" />
        <TextInput label="Session Code" source="sessionCode" />
      </SimpleForm>
    </Create>
  );
};
