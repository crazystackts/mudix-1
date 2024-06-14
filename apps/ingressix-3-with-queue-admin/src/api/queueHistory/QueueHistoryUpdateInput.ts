import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";

export type QueueHistoryUpdateInput = {
  posicaoAtual?: number;
  queues?: QueueWhereUniqueInput;
  status?: string;
};
