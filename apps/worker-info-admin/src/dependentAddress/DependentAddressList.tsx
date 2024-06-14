import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPENDENT_TITLE_FIELD } from "../dependent/DependentTitle";

export const DependentAddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DependentAddresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <TextField label="Complement" source="complement" />
        <ReferenceField
          label="Dependents"
          source="dependent.id"
          reference="Dependent"
        >
          <TextField source={DEPENDENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Neighborhood" source="neighborhood" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="State" source="state" />
        <TextField label="Street" source="street" />
        <TextField label="Title" source="title" />
        <TextField label="Zip" source="zip" />
      </Datagrid>
    </List>
  );
};
