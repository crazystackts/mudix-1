import { Order } from "../order/Order";

export type PaymentHistory = {
  id: number;
  order?: Order;
  paymentAmount: number;
  paymentDate: Date;
  paymentMethod: string;
  paymentStatus: string;
};
