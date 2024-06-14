import { QueuePosition as TQueuePosition } from "../api/queuePosition/QueuePosition";

export const QUEUEPOSITION_TITLE_FIELD = "id";

export const QueuePositionTitle = (record: TQueuePosition): string => {
  return record.id?.toString() || String(record.id);
};
