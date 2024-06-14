import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DEPENDENT_TITLE_FIELD } from "./DependentTitle";
import { DEPENDENTCONTACTAUTHORIZATION_TITLE_FIELD } from "../dependentContactAuthorization/DependentContactAuthorizationTitle";
import { REQUEST_TITLE_FIELD } from "../request/RequestTitle";

export const DependentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DependentAddress"
          target="dependent_id"
          label="DependentAddresses"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="DependentAttachment"
          target="dependent_id"
          label="DependentAttachments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Dependents"
              source="dependent.id"
              reference="Dependent"
            >
              <TextField source={DEPENDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Group" source="group" />
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DependentContact"
          target="dependent_id"
          label="DependentContacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Dependents"
              source="dependent.id"
              reference="Dependent"
            >
              <TextField source={DEPENDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DependentDocument"
          target="dependent_id"
          label="DependentDocuments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Dependents"
              source="dependent.id"
              reference="Dependent"
            >
              <TextField source={DEPENDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Issuer" source="issuer" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DependentPhone"
          target="dependent_id"
          label="DependentPhones"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Dependents"
              source="dependent.id"
              reference="Dependent"
            >
              <TextField source={DEPENDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
