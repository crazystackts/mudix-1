import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type ItemWhereInput = {
  dateTime?: DateTimeFilter;
  id?: IntFilter;
  order?: OrderWhereUniqueInput;
  session?: SessionWhereUniqueInput;
  tickets?: TicketListRelationFilter;
};
