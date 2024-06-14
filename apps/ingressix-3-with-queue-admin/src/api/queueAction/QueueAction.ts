import { Queue } from "../queue/Queue";
import { User } from "../user/User";

export type QueueAction = {
  actionTimestamp: Date;
  actionType: string;
  details: string;
  id: string;
  queues?: Queue;
  users?: User;
};
