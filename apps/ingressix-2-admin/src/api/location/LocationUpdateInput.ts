import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  events?: EventUpdateManyWithoutLocationsInput;
  locationName?: string;
};
