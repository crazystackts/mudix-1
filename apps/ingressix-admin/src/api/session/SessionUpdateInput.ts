import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ItemUpdateManyWithoutSessionsInput } from "./ItemUpdateManyWithoutSessionsInput";
import { TicketUpdateManyWithoutSessionsInput } from "./TicketUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  dateTime?: Date;
  event?: EventWhereUniqueInput;
  items?: ItemUpdateManyWithoutSessionsInput;
  tickets?: TicketUpdateManyWithoutSessionsInput;
};
