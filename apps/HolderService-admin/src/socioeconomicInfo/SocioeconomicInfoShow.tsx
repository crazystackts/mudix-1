import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SocioeconomicInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Family Income Code" source="familyIncomeCode" />
        <TextField label="Family Income Title" source="familyIncomeTitle" />
        <TextField label="Holder ID" source="holderId" />
        <TextField label="ID" source="id" />
        <TextField label="Salary Code" source="salaryCode" />
        <TextField label="Salary Title" source="salaryTitle" />
      </SimpleShowLayout>
    </Show>
  );
};
