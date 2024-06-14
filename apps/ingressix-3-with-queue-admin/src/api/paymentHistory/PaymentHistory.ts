import { Order } from "../order/Order";
import { Decimal } from "decimal.js";

export type PaymentHistory = {
  id: number;
  orders?: Order;
  paymentAmount: Decimal;
  paymentDate: Date;
  paymentMethod: string;
  paymentStatus: string;
};
