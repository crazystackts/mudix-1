import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentHistoryListRelationFilter } from "../paymentHistory/PaymentHistoryListRelationFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type OrderWhereInput = {
  acquisitionChannel?: StringFilter;
  cancellationDate?: DateTimeNullableFilter;
  confirmationDate?: DateTimeNullableFilter;
  creationDate?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: IntFilter;
  orderItems?: OrderItemListRelationFilter;
  orderStatus?: StringNullableFilter;
  paymentHistory?: PaymentHistoryListRelationFilter;
  paymentMethod?: StringFilter;
  paymentUuidCrd?: StringNullableFilter;
  paymentUuidOnPremises?: StringNullableFilter;
  pixCode?: StringNullableFilter;
  pixExpirationDate?: DateTimeNullableFilter;
  pixExpirationTime?: StringNullableFilter;
  session?: SessionWhereUniqueInput;
};
