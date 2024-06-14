import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { PaymentHistory } from "../paymentHistory/PaymentHistory";
import { Session } from "../session/Session";

export type Order = {
  acquisitionChannel: string;
  cancellationDate: Date;
  confirmationDate: Date;
  creationDate: Date;
  customers?: Customer;
  id: number;
  orderItems?: Array<OrderItem>;
  orderStatus: string;
  paymentHistory?: Array<PaymentHistory>;
  paymentMethod: string;
  paymentUuidCrd: string;
  paymentUuidOnPremises: string;
  pixCode: string;
  pixExpirationDate: Date;
  pixExpirationTime: Date;
  sessions?: Session;
};
