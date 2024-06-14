import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentHistoryUpdateInput = {
  amount?: number;
  order?: OrderWhereUniqueInput;
  paymentDate?: Date;
  paymentMethod?: string;
};
