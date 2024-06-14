import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { PaymentHistoryCreateNestedManyWithoutOrdersInput } from "./PaymentHistoryCreateNestedManyWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderCreateInput = {
  acquisitionChannel: string;
  cancellationDate: Date;
  confirmationDate: Date;
  creationDate: Date;
  customers: CustomerWhereUniqueInput;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  orderStatus: string;
  paymentHistory?: PaymentHistoryCreateNestedManyWithoutOrdersInput;
  paymentMethod: string;
  paymentUuidCrd: string;
  paymentUuidOnPremises: string;
  pixCode: string;
  pixExpirationDate: Date;
  pixExpirationTime: Date;
  sessions: SessionWhereUniqueInput;
};
