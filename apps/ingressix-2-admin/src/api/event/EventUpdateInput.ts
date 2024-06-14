import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventUpdateInput = {
  category?: CategoryWhereUniqueInput;
  eventClassification?: string;
  eventDetail?: string | null;
  eventDuration?: string | null;
  eventImage?: string | null;
  eventName?: string;
  eventStatus?: string;
  location?: LocationWhereUniqueInput;
  sessions?: SessionUpdateManyWithoutEventsInput;
  unit?: UnitWhereUniqueInput;
};
