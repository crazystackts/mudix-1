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

import { DEPENDENTCONTACTAUTHORIZATION_TITLE_FIELD } from "../dependentContactAuthorization/DependentContactAuthorizationTitle";
import { REQUEST_TITLE_FIELD } from "./RequestTitle";
import { CONTACTAUTHORIZATION_TITLE_FIELD } from "../contactAuthorization/ContactAuthorizationTitle";
import { WORKER_TITLE_FIELD } from "../worker/WorkerTitle";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Channel" source="channel" />
        <BooleanField label="Finalize" source="finalize" />
        <TextField label="ID" source="id" />
        <TextField label="Ip" source="ip" />
        <BooleanField label="Renewal" source="renewal" />
        <TextField label="Step" source="step" />
        <TextField label="Type Field" source="typeField" />
        <ReferenceField label="Worker" source="worker.id" reference="Worker">
          <TextField source={WORKER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Dependent"
          target="request_id"
          label="Dependents"
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
            <ReferenceField
              label="Request"
              source="request.id"
              reference="Request"
            >
              <TextField source={REQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Social First Name" source="socialFirstName" />
            <TextField label="Social Last Name" source="socialLastName" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Holder"
          target="request_id"
          label="Holders"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Affectionate First Name"
              source="affectionateFirstName"
            />
            <TextField
              label="Affectionate Gender"
              source="affectionateGender"
            />
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
            <ReferenceField
              label="Request"
              source="request.id"
              reference="Request"
            >
              <TextField source={REQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Social First Name" source="socialFirstName" />
            <TextField label="Social Gender" source="socialGender" />
            <TextField label="Social Last Name" source="socialLastName" />
            <TextField label="Token" source="token" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
