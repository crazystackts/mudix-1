import { HolderWhereInput } from "./HolderWhereInput";
import { HolderOrderByInput } from "./HolderOrderByInput";

export type HolderFindManyArgs = {
  where?: HolderWhereInput;
  orderBy?: Array<HolderOrderByInput>;
  skip?: number;
  take?: number;
};
