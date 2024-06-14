import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ContactAuthorizationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContactAuthorizations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Email" source="email" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Push" source="push" />
        <BooleanField label="Sms" source="sms" />
      </Datagrid>
    </List>
  );
};
