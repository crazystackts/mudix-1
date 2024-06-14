import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOLDER_TITLE_FIELD } from "../holder/HolderTitle";

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
        <ReferenceField label="Holder" source="holder.id" reference="Holder">
          <TextField source={HOLDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Push" source="push" />
        <BooleanField label="Sms" source="sms" />
      </Datagrid>
    </List>
  );
};
