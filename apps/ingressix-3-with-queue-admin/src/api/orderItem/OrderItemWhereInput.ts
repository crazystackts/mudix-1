import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: IntFilter;
  orderItemDateTime?: DateTimeFilter;
  orders?: OrderWhereUniqueInput;
  sessions?: SessionWhereUniqueInput;
};
