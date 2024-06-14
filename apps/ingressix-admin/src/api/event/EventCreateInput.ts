import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventCreateInput = {
  category: CategoryWhereUniqueInput;
  classification: string;
  details: string;
  duration?: string | null;
  image?: string | null;
  location: LocationWhereUniqueInput;
  name: string;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
  status: string;
  unit: UnitWhereUniqueInput;
};
