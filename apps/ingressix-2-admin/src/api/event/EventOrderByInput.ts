import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  categoryId?: SortOrder;
  eventClassification?: SortOrder;
  eventDetail?: SortOrder;
  eventDuration?: SortOrder;
  eventImage?: SortOrder;
  eventName?: SortOrder;
  eventStatus?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  unitId?: SortOrder;
};
