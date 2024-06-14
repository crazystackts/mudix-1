import { Queue } from "../queue/Queue";
import { User } from "../user/User";

export type Notification = {
  id: string;
  message: string;
  queues?: Queue;
  sentAt: Date;
  users?: User;
};
