import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const WorkerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cnpj" source="cnpj" />
        <TextField label="Company Name" source="companyName" />
        <TextField label="Cpf" source="cpf" />
        <TextField label="Ctps Number" source="ctpsNumber" />
        <TextField label="Ctps Series" source="ctpsSeries" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Request" source="request" />
        <TextField label="Status" source="status" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
