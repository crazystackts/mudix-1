import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HolderList } from "./holder/HolderList";
import { HolderCreate } from "./holder/HolderCreate";
import { HolderEdit } from "./holder/HolderEdit";
import { HolderShow } from "./holder/HolderShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { DependentList } from "./dependent/DependentList";
import { DependentCreate } from "./dependent/DependentCreate";
import { DependentEdit } from "./dependent/DependentEdit";
import { DependentShow } from "./dependent/DependentShow";
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
          name="Holder"
          list={HolderList}
          edit={HolderEdit}
          create={HolderCreate}
          show={HolderShow}
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
      </Admin>
    </div>
  );
};

export default App;
