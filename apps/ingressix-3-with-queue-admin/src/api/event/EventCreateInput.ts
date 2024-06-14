import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventCreateInput = {
  categories: CategoryWhereUniqueInput;
  eventClassification: string;
  eventDetail: string;
  eventDuration: Date;
  eventImage: string;
  eventName: string;
  eventStatus: string;
  locations: LocationWhereUniqueInput;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
  units: UnitWhereUniqueInput;
};
