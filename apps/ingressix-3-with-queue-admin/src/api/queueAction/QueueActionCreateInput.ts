import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueueActionCreateInput = {
  actionType: string;
  details: string;
  queues: QueueWhereUniqueInput;
  users: UserWhereUniqueInput;
};
