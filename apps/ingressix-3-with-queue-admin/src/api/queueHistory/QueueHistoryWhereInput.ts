import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type QueueHistoryWhereInput = {
  id?: StringFilter;
  posicaoAtual?: IntFilter;
  queues?: QueueWhereUniqueInput;
  recordedAt?: DateTimeFilter;
  status?: StringFilter;
};
