import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueuePositionUpdateInput = {
  posicaoAtual?: number;
  priorityLevel?: number;
  queues?: QueueWhereUniqueInput;
  sessions?: SessionWhereUniqueInput | null;
  users?: UserWhereUniqueInput;
};
