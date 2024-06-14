import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { PaymentHistoryUpdateManyWithoutOrdersInput } from "./PaymentHistoryUpdateManyWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderUpdateInput = {
  acquisitionChannel?: string;
  cancellationDate?: Date;
  confirmationDate?: Date;
  creationDate?: Date;
  customers?: CustomerWhereUniqueInput;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  orderStatus?: string;
  paymentHistory?: PaymentHistoryUpdateManyWithoutOrdersInput;
  paymentMethod?: string;
  paymentUuidCrd?: string;
  paymentUuidOnPremises?: string;
  pixCode?: string;
  pixExpirationDate?: Date;
  pixExpirationTime?: Date;
  sessions?: SessionWhereUniqueInput;
};
