import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTACTAUTHORIZATION_TITLE_FIELD } from "../contactAuthorization/ContactAuthorizationTitle";
import { REQUEST_TITLE_FIELD } from "../request/RequestTitle";

export const HolderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Holders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Affectionate First Name"
          source="affectionateFirstName"
        />
        <TextField label="Affectionate Gender" source="affectionateGender" />
        <TextField
          label="Affectionate Last Name"
          source="affectionateLastName"
        />
        <TextField label="Birth Date" source="birthDate" />
        <ReferenceField
          label="Contact Authorization"
          source="contactauthorization.id"
          reference="ContactAuthorization"
        >
          <TextField source={CONTACTAUTHORIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Education" source="education" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Marital Status" source="maritalStatus" />
        <ReferenceField label="Request" source="request.id" reference="Request">
          <TextField source={REQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Social First Name" source="socialFirstName" />
        <TextField label="Social Gender" source="socialGender" />
        <TextField label="Social Last Name" source="socialLastName" />
        <TextField label="Token" source="token" />
        <TextField label="Type Field" source="typeField" />
      </Datagrid>
    </List>
  );
};
