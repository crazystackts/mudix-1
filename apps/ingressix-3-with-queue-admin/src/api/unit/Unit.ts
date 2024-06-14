import { Event } from "../event/Event";

export type Unit = {
  events?: Array<Event>;
  id: number;
  unitName: string;
};
