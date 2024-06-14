import { StringFilter } from "../../util/StringFilter";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringFilter;
  queues?: QueueWhereUniqueInput;
  sentAt?: DateTimeFilter;
  users?: UserWhereUniqueInput;
};
