import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { AttachmentList } from "./attachment/AttachmentList";
import { AttachmentCreate } from "./attachment/AttachmentCreate";
import { AttachmentEdit } from "./attachment/AttachmentEdit";
import { AttachmentShow } from "./attachment/AttachmentShow";
import { ContactAuthorizationList } from "./contactAuthorization/ContactAuthorizationList";
import { ContactAuthorizationCreate } from "./contactAuthorization/ContactAuthorizationCreate";
import { ContactAuthorizationEdit } from "./contactAuthorization/ContactAuthorizationEdit";
import { ContactAuthorizationShow } from "./contactAuthorization/ContactAuthorizationShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { EditedFieldList } from "./editedField/EditedFieldList";
import { EditedFieldCreate } from "./editedField/EditedFieldCreate";
import { EditedFieldEdit } from "./editedField/EditedFieldEdit";
import { EditedFieldShow } from "./editedField/EditedFieldShow";
import { FilialList } from "./filial/FilialList";
import { FilialCreate } from "./filial/FilialCreate";
import { FilialEdit } from "./filial/FilialEdit";
import { FilialShow } from "./filial/FilialShow";
import { PhoneList } from "./phone/PhoneList";
import { PhoneCreate } from "./phone/PhoneCreate";
import { PhoneEdit } from "./phone/PhoneEdit";
import { PhoneShow } from "./phone/PhoneShow";
import { SocioeconomicInfoList } from "./socioeconomicInfo/SocioeconomicInfoList";
import { SocioeconomicInfoCreate } from "./socioeconomicInfo/SocioeconomicInfoCreate";
import { SocioeconomicInfoEdit } from "./socioeconomicInfo/SocioeconomicInfoEdit";
import { SocioeconomicInfoShow } from "./socioeconomicInfo/SocioeconomicInfoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HolderService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Attachment"
          list={AttachmentList}
          edit={AttachmentEdit}
          create={AttachmentCreate}
          show={AttachmentShow}
        />
        <Resource
          name="ContactAuthorization"
          list={ContactAuthorizationList}
          edit={ContactAuthorizationEdit}
          create={ContactAuthorizationCreate}
          show={ContactAuthorizationShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="EditedField"
          list={EditedFieldList}
          edit={EditedFieldEdit}
          create={EditedFieldCreate}
          show={EditedFieldShow}
        />
        <Resource
          name="Filial"
          list={FilialList}
          edit={FilialEdit}
          create={FilialCreate}
          show={FilialShow}
        />
        <Resource
          name="Phone"
          list={PhoneList}
          edit={PhoneEdit}
          create={PhoneCreate}
          show={PhoneShow}
        />
        <Resource
          name="SocioeconomicInfo"
          list={SocioeconomicInfoList}
          edit={SocioeconomicInfoEdit}
          create={SocioeconomicInfoCreate}
          show={SocioeconomicInfoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
