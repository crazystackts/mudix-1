import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message: string;
  queues: QueueWhereUniqueInput;
  users: UserWhereUniqueInput;
};
