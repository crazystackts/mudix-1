import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventWhereInput = {
  category?: CategoryWhereUniqueInput;
  eventClassification?: StringFilter;
  eventDetail?: StringNullableFilter;
  eventDuration?: StringNullableFilter;
  eventImage?: StringNullableFilter;
  eventName?: StringFilter;
  eventStatus?: StringFilter;
  id?: IntFilter;
  location?: LocationWhereUniqueInput;
  sessions?: SessionListRelationFilter;
  unit?: UnitWhereUniqueInput;
};
