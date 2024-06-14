import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderItemUpdateInput = {
  orderItemDateTime?: Date;
  orders?: OrderWhereUniqueInput;
  sessions?: SessionWhereUniqueInput;
};
