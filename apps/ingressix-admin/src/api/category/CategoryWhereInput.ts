import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  events?: EventListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
};
