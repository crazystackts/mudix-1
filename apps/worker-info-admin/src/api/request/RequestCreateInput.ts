import { DependentCreateNestedManyWithoutRequestsInput } from "./DependentCreateNestedManyWithoutRequestsInput";
import { HolderCreateNestedManyWithoutRequestsInput } from "./HolderCreateNestedManyWithoutRequestsInput";
import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type RequestCreateInput = {
  channel?: string | null;
  dependents?: DependentCreateNestedManyWithoutRequestsInput;
  finalize?: boolean | null;
  holder?: HolderCreateNestedManyWithoutRequestsInput;
  ip?: string | null;
  renewal?: boolean | null;
  step?: string | null;
  typeField?: string | null;
  worker: WorkerWhereUniqueInput;
};
