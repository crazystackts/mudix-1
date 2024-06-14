import { SortOrder } from "../../util/SortOrder";

export type QueueHistoryOrderByInput = {
  id?: SortOrder;
  posicaoAtual?: SortOrder;
  queue_id?: SortOrder;
  recordedAt?: SortOrder;
  status?: SortOrder;
};
