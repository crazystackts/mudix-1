import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PaymentHistoryListRelationFilter } from "../paymentHistory/PaymentHistoryListRelationFilter";

export type OrderWhereInput = {
  acquisitionChannel?: StringFilter;
  customer?: CustomerWhereUniqueInput;
  id?: IntFilter;
  items?: ItemListRelationFilter;
  onPremisesUuid?: StringNullableFilter;
  orderCancellationDate?: DateTimeNullableFilter;
  orderConfirmationDate?: DateTimeNullableFilter;
  orderCreationDate?: DateTimeFilter;
  orderStatus?: StringNullableFilter;
  paymentHistories?: PaymentHistoryListRelationFilter;
  paymentMethod?: StringFilter;
  paymentUuid?: StringNullableFilter;
  pixCode?: StringNullableFilter;
  pixExpiration?: DateTimeNullableFilter;
  pixExpirationTime?: DateTimeNullableFilter;
  sessionCode?: StringFilter;
};
