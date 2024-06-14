import { EventCreateNestedManyWithoutUnitsInput } from "./EventCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  events?: EventCreateNestedManyWithoutUnitsInput;
  name: string;
};
