import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { PaymentHistoryUpdateManyWithoutOrdersInput } from "./PaymentHistoryUpdateManyWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderUpdateInput = {
  acquisitionChannel?: string;
  cancellationDate?: Date | null;
  confirmationDate?: Date | null;
  creationDate?: Date;
  customer?: CustomerWhereUniqueInput;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  orderStatus?: string | null;
  paymentHistory?: PaymentHistoryUpdateManyWithoutOrdersInput;
  paymentMethod?: string;
  paymentUuidCrd?: string | null;
  paymentUuidOnPremises?: string | null;
  pixCode?: string | null;
  pixExpirationDate?: Date | null;
  pixExpirationTime?: string | null;
  session?: SessionWhereUniqueInput;
};
