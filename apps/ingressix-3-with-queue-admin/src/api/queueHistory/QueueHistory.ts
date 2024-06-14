import { Queue } from "../queue/Queue";

export type QueueHistory = {
  id: string;
  posicaoAtual: number;
  queues?: Queue;
  recordedAt: Date;
  status: string;
};
