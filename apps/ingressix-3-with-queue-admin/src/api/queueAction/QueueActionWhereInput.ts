import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueueActionWhereInput = {
  actionTimestamp?: DateTimeFilter;
  actionType?: StringFilter;
  details?: StringFilter;
  id?: StringFilter;
  queues?: QueueWhereUniqueInput;
  users?: UserWhereUniqueInput;
};
