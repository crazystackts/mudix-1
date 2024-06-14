import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { OrderTitle } from "../order/OrderTitle";
import { QueuePositionTitle } from "../queuePosition/QueuePositionTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="events.id" reference="Event" label="Events">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Max Tickets" source="maxTickets" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="queuePositions"
          reference="QueuePosition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueuePositionTitle} />
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
    </Edit>
  );
};
