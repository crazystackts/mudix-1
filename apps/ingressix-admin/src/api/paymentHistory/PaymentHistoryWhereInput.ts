import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentHistoryWhereInput = {
  amount?: FloatFilter;
  id?: IntFilter;
  order?: OrderWhereUniqueInput;
  paymentDate?: DateTimeFilter;
  paymentMethod?: StringFilter;
};
