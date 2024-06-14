import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { QueueActionListRelationFilter } from "../queueAction/QueueActionListRelationFilter";
import { QueuePositionListRelationFilter } from "../queuePosition/QueuePositionListRelationFilter";

export type UserWhereInput = {
  customers?: CustomerWhereUniqueInput;
  email?: StringFilter;
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
  queueActions?: QueueActionListRelationFilter;
  queuePositions?: QueuePositionListRelationFilter;
  role?: StringFilter;
  userName?: StringFilter;
};
