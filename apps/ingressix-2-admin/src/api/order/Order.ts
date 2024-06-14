import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { PaymentHistory } from "../paymentHistory/PaymentHistory";
import { Session } from "../session/Session";

export type Order = {
  acquisitionChannel: string;
  cancellationDate: Date | null;
  confirmationDate: Date | null;
  creationDate: Date;
  customer?: Customer;
  id: number;
  orderItems?: Array<OrderItem>;
  orderStatus: string | null;
  paymentHistory?: Array<PaymentHistory>;
  paymentMethod: string;
  paymentUuidCrd: string | null;
  paymentUuidOnPremises: string | null;
  pixCode: string | null;
  pixExpirationDate: Date | null;
  pixExpirationTime: string | null;
  session?: Session;
};
