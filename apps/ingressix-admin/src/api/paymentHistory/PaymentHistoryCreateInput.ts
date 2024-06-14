import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentHistoryCreateInput = {
  amount: number;
  order: OrderWhereUniqueInput;
  paymentDate: Date;
  paymentMethod: string;
};
