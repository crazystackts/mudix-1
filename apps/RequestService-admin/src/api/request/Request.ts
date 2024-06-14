import { JsonValue } from "type-fest";

export type Request = {
  channel: string | null;
  dependents: JsonValue;
  finalize: boolean | null;
  holder: JsonValue;
  id: string;
  ip: string | null;
  renewal: boolean | null;
  step: string | null;
  typeField: string | null;
  workerId: string;
};
