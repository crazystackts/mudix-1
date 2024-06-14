import { Order } from "../order/Order";
import { Session } from "../session/Session";

export type OrderItem = {
  id: number;
  order?: Order;
  orderItemDateTime: Date;
  session?: Session;
};
