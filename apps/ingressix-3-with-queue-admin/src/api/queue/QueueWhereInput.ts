import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { QueueActionListRelationFilter } from "../queueAction/QueueActionListRelationFilter";
import { QueueHistoryListRelationFilter } from "../queueHistory/QueueHistoryListRelationFilter";
import { QueuePositionListRelationFilter } from "../queuePosition/QueuePositionListRelationFilter";

export type QueueWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  notifications?: NotificationListRelationFilter;
  queueActions?: QueueActionListRelationFilter;
  queueHistories?: QueueHistoryListRelationFilter;
  queuePositions?: QueuePositionListRelationFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
};
