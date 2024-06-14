import { Event } from "../event/Event";

export type Category = {
  events?: Array<Event>;
  id: number;
  name: string;
};
