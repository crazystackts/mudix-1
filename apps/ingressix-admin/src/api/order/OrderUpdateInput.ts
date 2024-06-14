import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutOrdersInput } from "./ItemUpdateManyWithoutOrdersInput";
import { PaymentHistoryUpdateManyWithoutOrdersInput } from "./PaymentHistoryUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  acquisitionChannel?: string;
  customer?: CustomerWhereUniqueInput;
  items?: ItemUpdateManyWithoutOrdersInput;
  onPremisesUuid?: string | null;
  orderCancellationDate?: Date | null;
  orderConfirmationDate?: Date | null;
  orderCreationDate?: Date;
  orderStatus?: string | null;
  paymentHistories?: PaymentHistoryUpdateManyWithoutOrdersInput;
  paymentMethod?: string;
  paymentUuid?: string | null;
  pixCode?: string | null;
  pixExpiration?: Date | null;
  pixExpirationTime?: Date | null;
  sessionCode?: string;
};
