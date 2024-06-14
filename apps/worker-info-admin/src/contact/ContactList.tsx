import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOLDER_TITLE_FIELD } from "../holder/HolderTitle";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Email" source="email" />
        <ReferenceField label="Holder" source="holder.id" reference="Holder">
          <TextField source={HOLDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
