import { DependentWhereInput } from "./DependentWhereInput";
import { DependentOrderByInput } from "./DependentOrderByInput";

export type DependentFindManyArgs = {
  where?: DependentWhereInput;
  orderBy?: Array<DependentOrderByInput>;
  skip?: number;
  take?: number;
};
