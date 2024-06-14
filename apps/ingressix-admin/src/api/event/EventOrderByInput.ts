import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  categoryId?: SortOrder;
  classification?: SortOrder;
  details?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  unitId?: SortOrder;
};
