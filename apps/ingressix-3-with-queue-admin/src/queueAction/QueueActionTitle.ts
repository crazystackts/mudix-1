import { QueueAction as TQueueAction } from "../api/queueAction/QueueAction";

export const QUEUEACTION_TITLE_FIELD = "actionType";

export const QueueActionTitle = (record: TQueueAction): string => {
  return record.actionType?.toString() || String(record.id);
};
