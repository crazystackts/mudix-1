import { Event } from "../event/Event";
import { Item } from "../item/Item";
import { Ticket } from "../ticket/Ticket";

export type Session = {
  dateTime: Date;
  event?: Event;
  id: string;
  items?: Array<Item>;
  tickets?: Array<Ticket>;
};
