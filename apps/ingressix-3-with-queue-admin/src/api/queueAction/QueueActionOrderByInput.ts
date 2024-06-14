import { SortOrder } from "../../util/SortOrder";

export type QueueActionOrderByInput = {
  actionTimestamp?: SortOrder;
  actionType?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  queue_id?: SortOrder;
  user_id?: SortOrder;
};
