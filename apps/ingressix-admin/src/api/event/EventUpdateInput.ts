import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventUpdateInput = {
  category?: CategoryWhereUniqueInput;
  classification?: string;
  details?: string;
  duration?: string | null;
  image?: string | null;
  location?: LocationWhereUniqueInput;
  name?: string;
  sessions?: SessionUpdateManyWithoutEventsInput;
  status?: string;
  unit?: UnitWhereUniqueInput;
};
