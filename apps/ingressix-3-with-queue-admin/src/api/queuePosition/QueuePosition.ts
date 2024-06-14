import { Queue } from "../queue/Queue";
import { Session } from "../session/Session";
import { User } from "../user/User";

export type QueuePosition = {
  id: string;
  joinedAt: Date;
  posicaoAtual: number;
  priorityLevel: number;
  queues?: Queue;
  sessions?: Session | null;
  updatedAt: Date;
  users?: User;
};
