import { Location as TLocation } from "../api/location/Location";

export const LOCATION_TITLE_FIELD = "locationName";

export const LocationTitle = (record: TLocation): string => {
  return record.locationName?.toString() || String(record.id);
};
