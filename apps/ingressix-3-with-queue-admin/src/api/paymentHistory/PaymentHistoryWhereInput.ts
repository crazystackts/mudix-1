import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentHistoryWhereInput = {
  id?: IntFilter;
  orders?: OrderWhereUniqueInput;
  paymentAmount?: DecimalFilter;
  paymentDate?: DateTimeFilter;
  paymentMethod?: StringFilter;
  paymentStatus?: StringFilter;
};
