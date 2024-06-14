import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { SESSION_TITLE_FIELD } from "../session/SessionTitle";

export const OrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Order Item Date Time" source="orderItemDateTime" />
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
    </List>
  );
};
