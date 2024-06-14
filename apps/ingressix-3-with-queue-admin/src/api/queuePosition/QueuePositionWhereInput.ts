import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueuePositionWhereInput = {
  id?: StringFilter;
  joinedAt?: DateTimeFilter;
  posicaoAtual?: IntFilter;
  priorityLevel?: IntFilter;
  queues?: QueueWhereUniqueInput;
  sessions?: SessionWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  users?: UserWhereUniqueInput;
};
