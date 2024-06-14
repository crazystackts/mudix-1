import { DependentFileWhereInput } from "./DependentFileWhereInput";
import { DependentFileOrderByInput } from "./DependentFileOrderByInput";

export type DependentFileFindManyArgs = {
  where?: DependentFileWhereInput;
  orderBy?: Array<DependentFileOrderByInput>;
  skip?: number;
  take?: number;
};
