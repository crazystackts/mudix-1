import { BigIntFilter } from "../../util/BigIntFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  cpf?: BigIntFilter;
  credential?: BigIntFilter;
  id?: IntFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
};
