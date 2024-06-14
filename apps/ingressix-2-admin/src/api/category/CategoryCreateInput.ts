import { EventCreateNestedManyWithoutCategoriesInput } from "./EventCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryName: string;
  events?: EventCreateNestedManyWithoutCategoriesInput;
};
