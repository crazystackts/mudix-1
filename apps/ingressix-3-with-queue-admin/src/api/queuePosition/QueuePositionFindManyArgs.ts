import { QueuePositionWhereInput } from "./QueuePositionWhereInput";
import { QueuePositionOrderByInput } from "./QueuePositionOrderByInput";

export type QueuePositionFindManyArgs = {
  where?: QueuePositionWhereInput;
  orderBy?: Array<QueuePositionOrderByInput>;
  skip?: number;
  take?: number;
};
