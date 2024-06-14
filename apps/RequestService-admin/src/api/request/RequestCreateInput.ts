import { InputJsonValue } from "../../types";

export type RequestCreateInput = {
  channel?: string | null;
  dependents?: InputJsonValue;
  finalize?: boolean | null;
  holder?: InputJsonValue;
  ip?: string | null;
  renewal?: boolean | null;
  step?: string | null;
  typeField?: string | null;
  workerId: string;
};
