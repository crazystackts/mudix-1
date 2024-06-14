import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { PaymentHistoryCreateNestedManyWithoutOrdersInput } from "./PaymentHistoryCreateNestedManyWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderCreateInput = {
  acquisitionChannel: string;
  cancellationDate?: Date | null;
  confirmationDate?: Date | null;
  creationDate: Date;
  customer: CustomerWhereUniqueInput;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  orderStatus?: string | null;
  paymentHistory?: PaymentHistoryCreateNestedManyWithoutOrdersInput;
  paymentMethod: string;
  paymentUuidCrd?: string | null;
  paymentUuidOnPremises?: string | null;
  pixCode?: string | null;
  pixExpirationDate?: Date | null;
  pixExpirationTime?: string | null;
  session: SessionWhereUniqueInput;
};
