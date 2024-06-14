import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { HOLDER_TITLE_FIELD } from "../holder/HolderTitle";

export const SocioeconomicInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Family Income Code" source="familyIncomeCode" />
        <TextField label="Family Income Title" source="familyIncomeTitle" />
        <ReferenceField label="Holder" source="holder.id" reference="Holder">
          <TextField source={HOLDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Salary Code" source="salaryCode" />
        <TextField label="Salary Title" source="salaryTitle" />
      </SimpleShowLayout>
    </Show>
  );
};
