import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentHistoryWhereInput = {
  id?: IntFilter;
  order?: OrderWhereUniqueInput;
  paymentAmount?: FloatFilter;
  paymentDate?: DateTimeFilter;
  paymentMethod?: StringFilter;
  paymentStatus?: StringFilter;
};
