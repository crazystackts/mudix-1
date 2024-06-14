import { EventUpdateManyWithoutUnitsInput } from "./EventUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  events?: EventUpdateManyWithoutUnitsInput;
  name?: string;
};
