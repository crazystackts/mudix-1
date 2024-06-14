import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutOrdersInput } from "./ItemCreateNestedManyWithoutOrdersInput";
import { PaymentHistoryCreateNestedManyWithoutOrdersInput } from "./PaymentHistoryCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  acquisitionChannel: string;
  customer: CustomerWhereUniqueInput;
  items?: ItemCreateNestedManyWithoutOrdersInput;
  onPremisesUuid?: string | null;
  orderCancellationDate?: Date | null;
  orderConfirmationDate?: Date | null;
  orderCreationDate: Date;
  orderStatus?: string | null;
  paymentHistories?: PaymentHistoryCreateNestedManyWithoutOrdersInput;
  paymentMethod: string;
  paymentUuid?: string | null;
  pixCode?: string | null;
  pixExpiration?: Date | null;
  pixExpirationTime?: Date | null;
  sessionCode: string;
};
