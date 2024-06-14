import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { TicketCreateNestedManyWithoutItemsInput } from "./TicketCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  dateTime: Date;
  order: OrderWhereUniqueInput;
  session: SessionWhereUniqueInput;
  tickets?: TicketCreateNestedManyWithoutItemsInput;
};
