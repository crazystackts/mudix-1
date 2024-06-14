import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  message?: SortOrder;
  queue_id?: SortOrder;
  sentAt?: SortOrder;
  user_id?: SortOrder;
};
