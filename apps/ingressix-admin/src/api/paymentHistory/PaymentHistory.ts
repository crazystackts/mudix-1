import { Order } from "../order/Order";

export type PaymentHistory = {
  amount: number;
  id: number;
  order?: Order;
  paymentDate: Date;
  paymentMethod: string;
};
