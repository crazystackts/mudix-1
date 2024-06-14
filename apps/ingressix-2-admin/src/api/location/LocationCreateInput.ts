import { EventCreateNestedManyWithoutLocationsInput } from "./EventCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  events?: EventCreateNestedManyWithoutLocationsInput;
  locationName: string;
};
