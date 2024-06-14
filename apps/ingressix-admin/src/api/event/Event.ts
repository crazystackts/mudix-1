import { Category } from "../category/Category";
import { Location } from "../location/Location";
import { Session } from "../session/Session";
import { Unit } from "../unit/Unit";

export type Event = {
  category?: Category;
  classification: string;
  details: string;
  duration: string | null;
  id: number;
  image: string | null;
  location?: Location;
  name: string;
  sessions?: Array<Session>;
  status: string;
  unit?: Unit;
};
