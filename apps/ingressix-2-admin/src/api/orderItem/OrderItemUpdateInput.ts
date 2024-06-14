import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderItemUpdateInput = {
  order?: OrderWhereUniqueInput;
  orderItemDateTime?: Date;
  session?: SessionWhereUniqueInput;
};
