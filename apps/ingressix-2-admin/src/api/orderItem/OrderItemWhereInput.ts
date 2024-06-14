import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: IntFilter;
  order?: OrderWhereUniqueInput;
  orderItemDateTime?: DateTimeFilter;
  session?: SessionWhereUniqueInput;
};
