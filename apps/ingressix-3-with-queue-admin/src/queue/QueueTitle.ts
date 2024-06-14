import { Queue as TQueue } from "../api/queue/Queue";

export const QUEUE_TITLE_FIELD = "name";

export const QueueTitle = (record: TQueue): string => {
  return record.name?.toString() || String(record.id);
};
