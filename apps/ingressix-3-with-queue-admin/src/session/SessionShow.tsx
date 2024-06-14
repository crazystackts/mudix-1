import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { SESSION_TITLE_FIELD } from "./SessionTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Events" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Max Tickets" source="maxTickets" />
        <TextField label="Remaining Tickets" source="remainingTickets" />
        <TextField label="Sale End Date" source="saleEndDate" />
        <TextField label="Sale Start Date" source="saleStartDate" />
        <TextField label="Session Date Time" source="sessionDateTime" />
        <TextField label="Session Status" source="sessionStatus" />
        <TextField label="Session Type" source="sessionType" />
        <ReferenceManyField
          reference="OrderItem"
          target="sessionId"
          label="OrderItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField
              label="Order Item Date Time"
              source="orderItemDateTime"
            />
            <ReferenceField label="Orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Sessions"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="sessionId" label="Orders">
          <Datagrid rowClick="show">
            <TextField
              label="Acquisition Channel"
              source="acquisitionChannel"
            />
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="QueuePosition"
          target="sessionId"
          label="QueuePositions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="joinedAt" label="Joined At" />
            <TextField label="Posicao Atual" source="posicaoAtual" />
            <TextField label="Priority Level" source="priorityLevel" />
            <ReferenceField label="Queues" source="queue.id" reference="Queue">
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Sessions"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="sessionId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <TextField label="Cancellation Date" source="cancellationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="Price Category" source="priceCategory" />
            <TextField label="Price Description" source="priceDescription" />
            <TextField label="Qr Code" source="qrCode" />
            <TextField label="Return Deadline" source="returnDeadline" />
            <TextField label="Seat Code" source="seatCode" />
            <ReferenceField
              label="Sessions"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Ticket Status" source="ticketStatus" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
