import { EventUpdateManyWithoutCategoriesInput } from "./EventUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryName?: string;
  events?: EventUpdateManyWithoutCategoriesInput;
};
