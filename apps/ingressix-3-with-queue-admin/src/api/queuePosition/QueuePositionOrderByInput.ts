import { SortOrder } from "../../util/SortOrder";

export type QueuePositionOrderByInput = {
  id?: SortOrder;
  joinedAt?: SortOrder;
  posicaoAtual?: SortOrder;
  priorityLevel?: SortOrder;
  queue_id?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
