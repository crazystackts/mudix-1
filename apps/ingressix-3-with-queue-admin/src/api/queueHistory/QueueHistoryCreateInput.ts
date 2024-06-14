import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";

export type QueueHistoryCreateInput = {
  posicaoAtual: number;
  queues: QueueWhereUniqueInput;
  status: string;
};
