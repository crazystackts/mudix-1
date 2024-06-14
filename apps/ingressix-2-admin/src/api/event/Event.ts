import { Category } from "../category/Category";
import { Location } from "../location/Location";
import { Session } from "../session/Session";
import { Unit } from "../unit/Unit";

export type Event = {
  category?: Category;
  eventClassification: string;
  eventDetail: string | null;
  eventDuration: string | null;
  eventImage: string | null;
  eventName: string;
  eventStatus: string;
  id: number;
  location?: Location;
  sessions?: Array<Session>;
  unit?: Unit;
};
