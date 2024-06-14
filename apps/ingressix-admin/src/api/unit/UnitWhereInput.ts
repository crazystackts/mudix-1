import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type UnitWhereInput = {
  events?: EventListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
};
