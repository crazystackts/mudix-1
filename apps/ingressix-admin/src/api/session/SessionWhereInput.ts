import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type SessionWhereInput = {
  dateTime?: DateTimeFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  tickets?: TicketListRelationFilter;
};
