import { Unit as TUnit } from "../api/unit/Unit";

export const UNIT_TITLE_FIELD = "name";

export const UnitTitle = (record: TUnit): string => {
  return record.name?.toString() || String(record.id);
};
