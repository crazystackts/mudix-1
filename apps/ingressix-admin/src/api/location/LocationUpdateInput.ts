import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  events?: EventUpdateManyWithoutLocationsInput;
  name?: string;
};
