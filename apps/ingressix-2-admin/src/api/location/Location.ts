import { Event } from "../event/Event";

export type Location = {
  events?: Array<Event>;
  id: bigint;
  locationName: string;
};
