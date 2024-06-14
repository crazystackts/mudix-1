import { Worker as TWorker } from "../api/worker/Worker";

export const WORKER_TITLE_FIELD = "companyName";

export const WorkerTitle = (record: TWorker): string => {
  return record.companyName?.toString() || String(record.id);
};
