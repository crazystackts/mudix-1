import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type CategoryWhereInput = {
  categoryName?: StringFilter;
  events?: EventListRelationFilter;
  id?: IntFilter;
};
