import { QueueHistoryWhereInput } from "./QueueHistoryWhereInput";
import { QueueHistoryOrderByInput } from "./QueueHistoryOrderByInput";

export type QueueHistoryFindManyArgs = {
  where?: QueueHistoryWhereInput;
  orderBy?: Array<QueueHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
