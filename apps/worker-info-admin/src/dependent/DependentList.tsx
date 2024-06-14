import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPENDENTCONTACTAUTHORIZATION_TITLE_FIELD } from "../dependentContactAuthorization/DependentContactAuthorizationTitle";
import { REQUEST_TITLE_FIELD } from "../request/RequestTitle";

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
        <ReferenceField
          label="Dependent Contact Authorization"
          source="dependentcontactauthorization.id"
          reference="DependentContactAuthorization"
        >
          <TextField source={DEPENDENTCONTACTAUTHORIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Education" source="education" />
        <BooleanField label="Exclude" source="exclude" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Marital Status" source="maritalStatus" />
        <TextField label="Relationship" source="relationship" />
        <ReferenceField label="Request" source="request.id" reference="Request">
          <TextField source={REQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Social First Name" source="socialFirstName" />
        <TextField label="Social Last Name" source="socialLastName" />
      </Datagrid>
    </List>
  );
};
