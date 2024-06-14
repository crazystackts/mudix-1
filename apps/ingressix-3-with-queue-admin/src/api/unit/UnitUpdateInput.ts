import { EventUpdateManyWithoutUnitsInput } from "./EventUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  events?: EventUpdateManyWithoutUnitsInput;
  unitName?: string;
};
