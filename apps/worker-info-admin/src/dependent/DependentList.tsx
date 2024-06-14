import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DependentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Dependents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Affectionate First Name"
          source="affectionateFirstName"
        />
        <TextField
          label="Affectionate Last Name"
          source="affectionateLastName"
        />
        <TextField label="Birth Date" source="birthDate" />
        <BooleanField label="Complete" source="complete" />
        <TextField label="Credential" source="credential" />
        <TextField label="Dependent Addresses" source="dependentAddresses" />
        <TextField
          label="Dependent Attachments"
          source="dependentAttachments"
        />
        <TextField
          label="Dependent Contact Authorization ID"
          source="dependentContactAuthorizationId"
        />
        <TextField label="Dependent Contacts" source="dependentContacts" />
        <TextField label="Dependent Documents" source="dependentDocuments" />
        <TextField label="Dependent Phones" source="dependentPhones" />
        <TextField label="Education" source="education" />
        <BooleanField label="Exclude" source="exclude" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Marital Status" source="maritalStatus" />
        <TextField label="Relationship" source="relationship" />
        <TextField label="Request ID" source="requestId" />
        <TextField label="Social First Name" source="socialFirstName" />
        <TextField label="Social Last Name" source="socialLastName" />
      </Datagrid>
    </List>
  );
};
