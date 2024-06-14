import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { OrderTitle } from "../order/OrderTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Max Tickets" source="maxTickets" />
        <ReferenceArrayInput
          source="order"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Remaining Tickets"
          source="remainingTickets"
        />
        <DateTimeInput label="Sale End Date" source="saleEndDate" />
        <DateTimeInput label="Sale Start Date" source="saleStartDate" />
        <DateTimeInput label="Session Date Time" source="sessionDateTime" />
        <TextInput label="Session Status" source="sessionStatus" />
        <TextInput label="Session Type" source="sessionType" />
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
