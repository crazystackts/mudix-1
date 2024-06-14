import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ItemCreateNestedManyWithoutSessionsInput } from "./ItemCreateNestedManyWithoutSessionsInput";
import { TicketCreateNestedManyWithoutSessionsInput } from "./TicketCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  dateTime: Date;
  event: EventWhereUniqueInput;
  items?: ItemCreateNestedManyWithoutSessionsInput;
  tickets?: TicketCreateNestedManyWithoutSessionsInput;
};
