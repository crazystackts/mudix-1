import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventUpdateInput = {
  categories?: CategoryWhereUniqueInput;
  eventClassification?: string;
  eventDetail?: string;
  eventDuration?: Date;
  eventImage?: string;
  eventName?: string;
  eventStatus?: string;
  locations?: LocationWhereUniqueInput;
  sessions?: SessionUpdateManyWithoutEventsInput;
  units?: UnitWhereUniqueInput;
};
