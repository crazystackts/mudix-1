import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WorkerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Cnpj" source="cnpj" />
        <TextInput label="Company Name" source="companyName" />
        <TextInput label="Cpf" source="cpf" />
        <TextInput label="Ctps Number" source="ctpsNumber" />
        <TextInput label="Ctps Series" source="ctpsSeries" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <div />
        <TextInput label="Status" source="status" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
