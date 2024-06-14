import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "channel";

export const RequestTitle = (record: TRequest): string => {
  return record.channel?.toString() || String(record.id);
};
