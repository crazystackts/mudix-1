import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string;
  queues?: QueueWhereUniqueInput;
  users?: UserWhereUniqueInput;
};
