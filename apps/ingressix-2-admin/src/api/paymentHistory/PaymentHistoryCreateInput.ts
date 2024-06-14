import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentHistoryCreateInput = {
  order: OrderWhereUniqueInput;
  paymentAmount: number;
  paymentDate: Date;
  paymentMethod: string;
  paymentStatus: string;
};
