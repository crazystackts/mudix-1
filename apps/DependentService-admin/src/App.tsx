import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DependentAddressList } from "./dependentAddress/DependentAddressList";
import { DependentAddressCreate } from "./dependentAddress/DependentAddressCreate";
import { DependentAddressEdit } from "./dependentAddress/DependentAddressEdit";
import { DependentAddressShow } from "./dependentAddress/DependentAddressShow";
import { DependentAttachmentList } from "./dependentAttachment/DependentAttachmentList";
import { DependentAttachmentCreate } from "./dependentAttachment/DependentAttachmentCreate";
import { DependentAttachmentEdit } from "./dependentAttachment/DependentAttachmentEdit";
import { DependentAttachmentShow } from "./dependentAttachment/DependentAttachmentShow";
import { DependentContactAuthorizationList } from "./dependentContactAuthorization/DependentContactAuthorizationList";
import { DependentContactAuthorizationCreate } from "./dependentContactAuthorization/DependentContactAuthorizationCreate";
import { DependentContactAuthorizationEdit } from "./dependentContactAuthorization/DependentContactAuthorizationEdit";
import { DependentContactAuthorizationShow } from "./dependentContactAuthorization/DependentContactAuthorizationShow";
import { DependentContactList } from "./dependentContact/DependentContactList";
import { DependentContactCreate } from "./dependentContact/DependentContactCreate";
import { DependentContactEdit } from "./dependentContact/DependentContactEdit";
import { DependentContactShow } from "./dependentContact/DependentContactShow";
import { DependentDocumentList } from "./dependentDocument/DependentDocumentList";
import { DependentDocumentCreate } from "./dependentDocument/DependentDocumentCreate";
import { DependentDocumentEdit } from "./dependentDocument/DependentDocumentEdit";
import { DependentDocumentShow } from "./dependentDocument/DependentDocumentShow";
import { DependentFileList } from "./dependentFile/DependentFileList";
import { DependentFileCreate } from "./dependentFile/DependentFileCreate";
import { DependentFileEdit } from "./dependentFile/DependentFileEdit";
import { DependentFileShow } from "./dependentFile/DependentFileShow";
import { DependentPhoneList } from "./dependentPhone/DependentPhoneList";
import { DependentPhoneCreate } from "./dependentPhone/DependentPhoneCreate";
import { DependentPhoneEdit } from "./dependentPhone/DependentPhoneEdit";
import { DependentPhoneShow } from "./dependentPhone/DependentPhoneShow";
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
        title={"DependentService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DependentAddress"
          list={DependentAddressList}
          edit={DependentAddressEdit}
          create={DependentAddressCreate}
          show={DependentAddressShow}
        />
        <Resource
          name="DependentAttachment"
          list={DependentAttachmentList}
          edit={DependentAttachmentEdit}
          create={DependentAttachmentCreate}
          show={DependentAttachmentShow}
        />
        <Resource
          name="DependentContactAuthorization"
          list={DependentContactAuthorizationList}
          edit={DependentContactAuthorizationEdit}
          create={DependentContactAuthorizationCreate}
          show={DependentContactAuthorizationShow}
        />
        <Resource
          name="DependentContact"
          list={DependentContactList}
          edit={DependentContactEdit}
          create={DependentContactCreate}
          show={DependentContactShow}
        />
        <Resource
          name="DependentDocument"
          list={DependentDocumentList}
          edit={DependentDocumentEdit}
          create={DependentDocumentCreate}
          show={DependentDocumentShow}
        />
        <Resource
          name="DependentFile"
          list={DependentFileList}
          edit={DependentFileEdit}
          create={DependentFileCreate}
          show={DependentFileShow}
        />
        <Resource
          name="DependentPhone"
          list={DependentPhoneList}
          edit={DependentPhoneEdit}
          create={DependentPhoneCreate}
          show={DependentPhoneShow}
        />
      </Admin>
    </div>
  );
};

export default App;
