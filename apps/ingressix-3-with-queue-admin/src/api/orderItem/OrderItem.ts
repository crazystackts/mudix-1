import { Order } from "../order/Order";
import { Session } from "../session/Session";

export type OrderItem = {
  id: number;
  orderItemDateTime: Date;
  orders?: Order;
  sessions?: Session;
};
