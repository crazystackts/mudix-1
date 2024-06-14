import { Dependent } from "../dependent/Dependent";
import { Holder } from "../holder/Holder";
import { Worker } from "../worker/Worker";

export type Request = {
  channel: string | null;
  dependents?: Array<Dependent>;
  finalize: boolean | null;
  holder?: Array<Holder>;
  id: string;
  ip: string | null;
  renewal: boolean | null;
  step: string | null;
  typeField: string | null;
  worker?: Worker;
};
