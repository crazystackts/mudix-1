import { NotificationUpdateManyWithoutQueuesInput } from "./NotificationUpdateManyWithoutQueuesInput";
import { QueueActionUpdateManyWithoutQueuesInput } from "./QueueActionUpdateManyWithoutQueuesInput";
import { QueueHistoryUpdateManyWithoutQueuesInput } from "./QueueHistoryUpdateManyWithoutQueuesInput";
import { QueuePositionUpdateManyWithoutQueuesInput } from "./QueuePositionUpdateManyWithoutQueuesInput";

export type QueueUpdateInput = {
  name?: string;
  notifications?: NotificationUpdateManyWithoutQueuesInput;
  queueActions?: QueueActionUpdateManyWithoutQueuesInput;
  queueHistories?: QueueHistoryUpdateManyWithoutQueuesInput;
  queuePositions?: QueuePositionUpdateManyWithoutQueuesInput;
  status?: string;
};
