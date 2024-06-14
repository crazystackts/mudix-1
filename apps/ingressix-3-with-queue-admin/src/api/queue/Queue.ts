import { Notification } from "../notification/Notification";
import { QueueAction } from "../queueAction/QueueAction";
import { QueueHistory } from "../queueHistory/QueueHistory";
import { QueuePosition } from "../queuePosition/QueuePosition";

export type Queue = {
  createdAt: Date;
  id: string;
  name: string;
  notifications?: Array<Notification>;
  queueActions?: Array<QueueAction>;
  queueHistories?: Array<QueueHistory>;
  queuePositions?: Array<QueuePosition>;
  status: string;
  updatedAt: Date;
};
