import { EventCreateNestedManyWithoutLocationsInput } from "./EventCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  events?: EventCreateNestedManyWithoutLocationsInput;
  name: string;
};
