import { Category } from "../category/Category";
import { Location } from "../location/Location";
import { Session } from "../session/Session";
import { Unit } from "../unit/Unit";

export type Event = {
  categories?: Category;
  eventClassification: string;
  eventDetail: string;
  eventDuration: Date;
  eventImage: string;
  eventName: string;
  eventStatus: string;
  id: number;
  locations?: Location;
  sessions?: Array<Session>;
  units?: Unit;
};
