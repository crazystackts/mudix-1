import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventCreateInput = {
  category: CategoryWhereUniqueInput;
  eventClassification: string;
  eventDetail?: string | null;
  eventDuration?: string | null;
  eventImage?: string | null;
  eventName: string;
  eventStatus: string;
  location: LocationWhereUniqueInput;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
  unit: UnitWhereUniqueInput;
};
