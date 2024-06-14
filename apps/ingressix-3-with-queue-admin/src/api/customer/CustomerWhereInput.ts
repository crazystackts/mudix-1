import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CustomerWhereInput = {
  customerCpf?: BigIntFilter;
  customerCredential?: BigIntFilter;
  customerName?: StringFilter;
  id?: IntFilter;
  orders?: OrderListRelationFilter;
  users?: UserListRelationFilter;
};
