import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderItemCreateInput = {
  orderItemDateTime: Date;
  orders: OrderWhereUniqueInput;
  sessions: SessionWhereUniqueInput;
};
