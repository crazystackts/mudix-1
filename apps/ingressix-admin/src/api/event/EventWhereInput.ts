import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type EventWhereInput = {
  category?: CategoryWhereUniqueInput;
  classification?: StringFilter;
  details?: StringFilter;
  duration?: StringNullableFilter;
  id?: IntFilter;
  image?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
  name?: StringFilter;
  sessions?: SessionListRelationFilter;
  status?: StringFilter;
  unit?: UnitWhereUniqueInput;
};
