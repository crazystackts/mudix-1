import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderItemCreateInput = {
  order: OrderWhereUniqueInput;
  orderItemDateTime: Date;
  session: SessionWhereUniqueInput;
};
