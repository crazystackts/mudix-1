import { QueueHistory as TQueueHistory } from "../api/queueHistory/QueueHistory";

export const QUEUEHISTORY_TITLE_FIELD = "status";

export const QueueHistoryTitle = (record: TQueueHistory): string => {
  return record.status?.toString() || String(record.id);
};
