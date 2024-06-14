import { QueueActionWhereInput } from "./QueueActionWhereInput";
import { QueueActionOrderByInput } from "./QueueActionOrderByInput";

export type QueueActionFindManyArgs = {
  where?: QueueActionWhereInput;
  orderBy?: Array<QueueActionOrderByInput>;
  skip?: number;
  take?: number;
};
