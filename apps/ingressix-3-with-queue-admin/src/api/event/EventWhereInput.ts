import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventWhereInput = {
  categories?: CategoryWhereUniqueInput;
  eventClassification?: StringFilter;
  eventDetail?: StringFilter;
  eventDuration?: DateTimeFilter;
  eventImage?: StringFilter;
  eventName?: StringFilter;
  eventStatus?: StringFilter;
  id?: IntFilter;
  locations?: LocationWhereUniqueInput;
  sessions?: SessionListRelationFilter;
  units?: UnitWhereUniqueInput;
};
