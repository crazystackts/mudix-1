import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "userName";

export const UserTitle = (record: TUser): string => {
  return record.userName?.toString() || String(record.id);
};
