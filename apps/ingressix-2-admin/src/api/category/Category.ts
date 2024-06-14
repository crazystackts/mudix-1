import { Event } from "../event/Event";

export type Category = {
  categoryName: string;
  events?: Array<Event>;
  id: number;
};
