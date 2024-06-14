import { DependentUpdateManyWithoutRequestsInput } from "./DependentUpdateManyWithoutRequestsInput";
import { HolderUpdateManyWithoutRequestsInput } from "./HolderUpdateManyWithoutRequestsInput";
import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type RequestUpdateInput = {
  channel?: string | null;
  dependents?: DependentUpdateManyWithoutRequestsInput;
  finalize?: boolean | null;
  holder?: HolderUpdateManyWithoutRequestsInput;
  ip?: string | null;
  renewal?: boolean | null;
  step?: string | null;
  typeField?: string | null;
  worker?: WorkerWhereUniqueInput;
};
