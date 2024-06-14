import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { HOLDER_TITLE_FIELD } from "./HolderTitle";
import { CONTACTAUTHORIZATION_TITLE_FIELD } from "../contactAuthorization/ContactAuthorizationTitle";
import { REQUEST_TITLE_FIELD } from "../request/RequestTitle";

export const HolderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="password" source="password" />
        <ReferenceField label="Request" source="request.id" reference="Request">
          <TextField source={REQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Social First Name" source="socialFirstName" />
        <TextField label="Social Gender" source="socialGender" />
        <TextField label="Social Last Name" source="socialLastName" />
        <TextField label="Token" source="token" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Address"
          target="holder_id"
          label="Addresses"
        >
          <Datagrid rowClick="show">
            <TextField label="City" source="city" />
            <TextField label="Complement" source="complement" />
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
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
          reference="Attachment"
          target="holder_id"
          label="Attachments"
        >
          <Datagrid rowClick="show">
            <TextField label="Group" source="group" />
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contact"
          target="holder_id"
          label="Contacts"
        >
          <Datagrid rowClick="show">
            <TextField label="Email" source="email" />
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="holder_id"
          label="Documents"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Issuer" source="issuer" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EditedField"
          target="holder_id"
          label="EditedFields"
        >
          <Datagrid rowClick="show">
            <TextField label="Field Name" source="fieldName" />
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Filial"
          target="holder_id"
          label="Filials"
        >
          <Datagrid rowClick="show">
            <TextField label="First Name" source="firstName" />
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Phone" target="holder_id" label="Phones">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SocioeconomicInfo"
          target="holder_id"
          label="SocioeconomicInfos"
        >
          <Datagrid rowClick="show">
            <TextField label="Family Income Code" source="familyIncomeCode" />
            <TextField label="Family Income Title" source="familyIncomeTitle" />
            <ReferenceField
              label="Holder"
              source="holder.id"
              reference="Holder"
            >
              <TextField source={HOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Salary Code" source="salaryCode" />
            <TextField label="Salary Title" source="salaryTitle" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
