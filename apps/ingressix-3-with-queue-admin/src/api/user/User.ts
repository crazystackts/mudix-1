import { Customer } from "../customer/Customer";
import { Notification } from "../notification/Notification";
import { QueueAction } from "../queueAction/QueueAction";
import { QueuePosition } from "../queuePosition/QueuePosition";

export type User = {
  customers?: Customer | null;
  email: string;
  id: string;
  notifications?: Array<Notification>;
  queueActions?: Array<QueueAction>;
  queuePositions?: Array<QueuePosition>;
  role: string;
  userName: string;
};
