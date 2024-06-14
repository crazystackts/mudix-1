import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { PaymentHistoryListRelationFilter } from "../paymentHistory/PaymentHistoryListRelationFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderWhereInput = {
  acquisitionChannel?: StringFilter;
  cancellationDate?: DateTimeFilter;
  confirmationDate?: DateTimeFilter;
  creationDate?: DateTimeFilter;
  customers?: CustomerWhereUniqueInput;
  id?: IntFilter;
  orderItems?: OrderItemListRelationFilter;
  orderStatus?: StringFilter;
  paymentHistory?: PaymentHistoryListRelationFilter;
  paymentMethod?: StringFilter;
  paymentUuidCrd?: StringFilter;
  paymentUuidOnPremises?: StringFilter;
  pixCode?: StringFilter;
  pixExpirationDate?: DateTimeFilter;
  pixExpirationTime?: DateTimeFilter;
  sessions?: SessionWhereUniqueInput;
};
