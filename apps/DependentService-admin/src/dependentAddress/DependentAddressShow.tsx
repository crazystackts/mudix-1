import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DependentAddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="Complement" source="complement" />
        <TextField label="Dependents ID" source="dependentsId" />
        <TextField label="ID" source="id" />
        <TextField label="Neighborhood" source="neighborhood" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="State" source="state" />
        <TextField label="Street" source="street" />
        <TextField label="Title" source="title" />
        <TextField label="Zip" source="zip" />
      </SimpleShowLayout>
    </Show>
  );
};
