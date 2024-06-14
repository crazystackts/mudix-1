import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { TicketUpdateManyWithoutItemsInput } from "./TicketUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  dateTime?: Date;
  order?: OrderWhereUniqueInput;
  session?: SessionWhereUniqueInput;
  tickets?: TicketUpdateManyWithoutItemsInput;
};
