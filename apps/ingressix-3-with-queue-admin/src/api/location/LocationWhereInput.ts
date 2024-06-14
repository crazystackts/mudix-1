import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  events?: EventListRelationFilter;
  id?: BigIntFilter;
  locationName?: StringFilter;
};
