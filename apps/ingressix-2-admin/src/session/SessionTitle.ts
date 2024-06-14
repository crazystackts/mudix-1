import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "sessionStatus";

export const SessionTitle = (record: TSession): string => {
  return record.sessionStatus?.toString() || String(record.id);
};
