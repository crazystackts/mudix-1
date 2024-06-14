import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DependentContactAuthorizationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DependentContactAuthorizations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Dependents ID" source="dependentsId" />
        <BooleanField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="Push" source="push" />
        <BooleanField label="Sms" source="sms" />
      </Datagrid>
    </List>
  );
};
