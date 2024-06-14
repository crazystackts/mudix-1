import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { PaymentHistoryList } from "./paymentHistory/PaymentHistoryList";
import { PaymentHistoryCreate } from "./paymentHistory/PaymentHistoryCreate";
import { PaymentHistoryEdit } from "./paymentHistory/PaymentHistoryEdit";
import { PaymentHistoryShow } from "./paymentHistory/PaymentHistoryShow";
import { QueueList } from "./queue/QueueList";
import { QueueCreate } from "./queue/QueueCreate";
import { QueueEdit } from "./queue/QueueEdit";
import { QueueShow } from "./queue/QueueShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { QueuePositionList } from "./queuePosition/QueuePositionList";
import { QueuePositionCreate } from "./queuePosition/QueuePositionCreate";
import { QueuePositionEdit } from "./queuePosition/QueuePositionEdit";
import { QueuePositionShow } from "./queuePosition/QueuePositionShow";
import { QueueActionList } from "./queueAction/QueueActionList";
import { QueueActionCreate } from "./queueAction/QueueActionCreate";
import { QueueActionEdit } from "./queueAction/QueueActionEdit";
import { QueueActionShow } from "./queueAction/QueueActionShow";
import { QueueHistoryList } from "./queueHistory/QueueHistoryList";
import { QueueHistoryCreate } from "./queueHistory/QueueHistoryCreate";
import { QueueHistoryEdit } from "./queueHistory/QueueHistoryEdit";
import { QueueHistoryShow } from "./queueHistory/QueueHistoryShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
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
        title={"ingressix-3-with-queue"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="PaymentHistory"
          list={PaymentHistoryList}
          edit={PaymentHistoryEdit}
          create={PaymentHistoryCreate}
          show={PaymentHistoryShow}
        />
        <Resource
          name="Queue"
          list={QueueList}
          edit={QueueEdit}
          create={QueueCreate}
          show={QueueShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="QueuePosition"
          list={QueuePositionList}
          edit={QueuePositionEdit}
          create={QueuePositionCreate}
          show={QueuePositionShow}
        />
        <Resource
          name="QueueAction"
          list={QueueActionList}
          edit={QueueActionEdit}
          create={QueueActionCreate}
          show={QueueActionShow}
        />
        <Resource
          name="QueueHistory"
          list={QueueHistoryList}
          edit={QueueHistoryEdit}
          create={QueueHistoryCreate}
          show={QueueHistoryShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
