import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const PaymentHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Payment Amount" source="paymentAmount" />
        <DateTimeInput label="Payment Date" source="paymentDate" />
        <TextInput label="Payment Method" source="paymentMethod" />
        <TextInput label="Payment Status" source="paymentStatus" />
      </SimpleForm>
    </Create>
  );
};
