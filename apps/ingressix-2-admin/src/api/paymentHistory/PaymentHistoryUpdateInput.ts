import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentHistoryUpdateInput = {
  order?: OrderWhereUniqueInput;
  paymentAmount?: number;
  paymentDate?: Date;
  paymentMethod?: string;
  paymentStatus?: string;
};
