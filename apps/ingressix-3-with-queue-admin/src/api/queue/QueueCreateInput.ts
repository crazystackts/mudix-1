import { NotificationCreateNestedManyWithoutQueuesInput } from "./NotificationCreateNestedManyWithoutQueuesInput";
import { QueueActionCreateNestedManyWithoutQueuesInput } from "./QueueActionCreateNestedManyWithoutQueuesInput";
import { QueueHistoryCreateNestedManyWithoutQueuesInput } from "./QueueHistoryCreateNestedManyWithoutQueuesInput";
import { QueuePositionCreateNestedManyWithoutQueuesInput } from "./QueuePositionCreateNestedManyWithoutQueuesInput";

export type QueueCreateInput = {
  name: string;
  notifications?: NotificationCreateNestedManyWithoutQueuesInput;
  queueActions?: QueueActionCreateNestedManyWithoutQueuesInput;
  queueHistories?: QueueHistoryCreateNestedManyWithoutQueuesInput;
  queuePositions?: QueuePositionCreateNestedManyWithoutQueuesInput;
  status: string;
};
