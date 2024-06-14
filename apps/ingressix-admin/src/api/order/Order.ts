import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { PaymentHistory } from "../paymentHistory/PaymentHistory";

export type Order = {
  acquisitionChannel: string;
  customer?: Customer;
  id: number;
  items?: Array<Item>;
  onPremisesUuid: string | null;
  orderCancellationDate: Date | null;
  orderConfirmationDate: Date | null;
  orderCreationDate: Date;
  orderStatus: string | null;
  paymentHistories?: Array<PaymentHistory>;
  paymentMethod: string;
  paymentUuid: string | null;
  pixCode: string | null;
  pixExpiration: Date | null;
  pixExpirationTime: Date | null;
  sessionCode: string;
};
