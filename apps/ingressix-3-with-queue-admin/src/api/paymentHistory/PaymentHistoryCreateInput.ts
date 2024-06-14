import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PaymentHistoryCreateInput = {
  orders: OrderWhereUniqueInput;
  paymentAmount: Decimal;
  paymentDate: Date;
  paymentMethod: string;
  paymentStatus: string;
};
