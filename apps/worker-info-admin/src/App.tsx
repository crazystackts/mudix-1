import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WorkerList } from "./worker/WorkerList";
import { WorkerCreate } from "./worker/WorkerCreate";
import { WorkerEdit } from "./worker/WorkerEdit";
import { WorkerShow } from "./worker/WorkerShow";
import { RequestList } from "./request/RequestList";
import { RequestCreate } from "./request/RequestCreate";
import { RequestEdit } from "./request/RequestEdit";
import { RequestShow } from "./request/RequestShow";
import { HolderList } from "./holder/HolderList";
import { HolderCreate } from "./holder/HolderCreate";
import { HolderEdit } from "./holder/HolderEdit";
import { HolderShow } from "./holder/HolderShow";
import { EditedFieldList } from "./editedField/EditedFieldList";
import { EditedFieldCreate } from "./editedField/EditedFieldCreate";
import { EditedFieldEdit } from "./editedField/EditedFieldEdit";
import { EditedFieldShow } from "./editedField/EditedFieldShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { SocioeconomicInfoList } from "./socioeconomicInfo/SocioeconomicInfoList";
import { SocioeconomicInfoCreate } from "./socioeconomicInfo/SocioeconomicInfoCreate";
import { SocioeconomicInfoEdit } from "./socioeconomicInfo/SocioeconomicInfoEdit";
import { SocioeconomicInfoShow } from "./socioeconomicInfo/SocioeconomicInfoShow";
import { FilialList } from "./filial/FilialList";
import { FilialCreate } from "./filial/FilialCreate";
import { FilialEdit } from "./filial/FilialEdit";
import { FilialShow } from "./filial/FilialShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { PhoneList } from "./phone/PhoneList";
import { PhoneCreate } from "./phone/PhoneCreate";
import { PhoneEdit } from "./phone/PhoneEdit";
import { PhoneShow } from "./phone/PhoneShow";
import { ContactAuthorizationList } from "./contactAuthorization/ContactAuthorizationList";
import { ContactAuthorizationCreate } from "./contactAuthorization/ContactAuthorizationCreate";
import { ContactAuthorizationEdit } from "./contactAuthorization/ContactAuthorizationEdit";
import { ContactAuthorizationShow } from "./contactAuthorization/ContactAuthorizationShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { AttachmentList } from "./attachment/AttachmentList";
import { AttachmentCreate } from "./attachment/AttachmentCreate";
import { AttachmentEdit } from "./attachment/AttachmentEdit";
import { AttachmentShow } from "./attachment/AttachmentShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { DependentList } from "./dependent/DependentList";
import { DependentCreate } from "./dependent/DependentCreate";
import { DependentEdit } from "./dependent/DependentEdit";
import { DependentShow } from "./dependent/DependentShow";
import { DependentDocumentList } from "./dependentDocument/DependentDocumentList";
import { DependentDocumentCreate } from "./dependentDocument/DependentDocumentCreate";
import { DependentDocumentEdit } from "./dependentDocument/DependentDocumentEdit";
import { DependentDocumentShow } from "./dependentDocument/DependentDocumentShow";
import { DependentAddressList } from "./dependentAddress/DependentAddressList";
import { DependentAddressCreate } from "./dependentAddress/DependentAddressCreate";
import { DependentAddressEdit } from "./dependentAddress/DependentAddressEdit";
import { DependentAddressShow } from "./dependentAddress/DependentAddressShow";
import { DependentPhoneList } from "./dependentPhone/DependentPhoneList";
import { DependentPhoneCreate } from "./dependentPhone/DependentPhoneCreate";
import { DependentPhoneEdit } from "./dependentPhone/DependentPhoneEdit";
import { DependentPhoneShow } from "./dependentPhone/DependentPhoneShow";
import { DependentContactAuthorizationList } from "./dependentContactAuthorization/DependentContactAuthorizationList";
import { DependentContactAuthorizationCreate } from "./dependentContactAuthorization/DependentContactAuthorizationCreate";
import { DependentContactAuthorizationEdit } from "./dependentContactAuthorization/DependentContactAuthorizationEdit";
import { DependentContactAuthorizationShow } from "./dependentContactAuthorization/DependentContactAuthorizationShow";
import { DependentContactList } from "./dependentContact/DependentContactList";
import { DependentContactCreate } from "./dependentContact/DependentContactCreate";
import { DependentContactEdit } from "./dependentContact/DependentContactEdit";
import { DependentContactShow } from "./dependentContact/DependentContactShow";
import { DependentAttachmentList } from "./dependentAttachment/DependentAttachmentList";
import { DependentAttachmentCreate } from "./dependentAttachment/DependentAttachmentCreate";
import { DependentAttachmentEdit } from "./dependentAttachment/DependentAttachmentEdit";
import { DependentAttachmentShow } from "./dependentAttachment/DependentAttachmentShow";
import { DependentFileList } from "./dependentFile/DependentFileList";
import { DependentFileCreate } from "./dependentFile/DependentFileCreate";
import { DependentFileEdit } from "./dependentFile/DependentFileEdit";
import { DependentFileShow } from "./dependentFile/DependentFileShow";
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
        title={"worker-info"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Worker"
          list={WorkerList}
          edit={WorkerEdit}
          create={WorkerCreate}
          show={WorkerShow}
        />
        <Resource
          name="Request"
          list={RequestList}
          edit={RequestEdit}
          create={RequestCreate}
          show={RequestShow}
        />
        <Resource
          name="Holder"
          list={HolderList}
          edit={HolderEdit}
          create={HolderCreate}
          show={HolderShow}
        />
        <Resource
          name="EditedField"
          list={EditedFieldList}
          edit={EditedFieldEdit}
          create={EditedFieldCreate}
          show={EditedFieldShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="SocioeconomicInfo"
          list={SocioeconomicInfoList}
          edit={SocioeconomicInfoEdit}
          create={SocioeconomicInfoCreate}
          show={SocioeconomicInfoShow}
        />
        <Resource
          name="Filial"
          list={FilialList}
          edit={FilialEdit}
          create={FilialCreate}
          show={FilialShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Phone"
          list={PhoneList}
          edit={PhoneEdit}
          create={PhoneCreate}
          show={PhoneShow}
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
          name="Attachment"
          list={AttachmentList}
          edit={AttachmentEdit}
          create={AttachmentCreate}
          show={AttachmentShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="Dependent"
          list={DependentList}
          edit={DependentEdit}
          create={DependentCreate}
          show={DependentShow}
        />
        <Resource
          name="DependentDocument"
          list={DependentDocumentList}
          edit={DependentDocumentEdit}
          create={DependentDocumentCreate}
          show={DependentDocumentShow}
        />
        <Resource
          name="DependentAddress"
          list={DependentAddressList}
          edit={DependentAddressEdit}
          create={DependentAddressCreate}
          show={DependentAddressShow}
        />
        <Resource
          name="DependentPhone"
          list={DependentPhoneList}
          edit={DependentPhoneEdit}
          create={DependentPhoneCreate}
          show={DependentPhoneShow}
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
          name="DependentAttachment"
          list={DependentAttachmentList}
          edit={DependentAttachmentEdit}
          create={DependentAttachmentCreate}
          show={DependentAttachmentShow}
        />
        <Resource
          name="DependentFile"
          list={DependentFileList}
          edit={DependentFileEdit}
          create={DependentFileCreate}
          show={DependentFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
