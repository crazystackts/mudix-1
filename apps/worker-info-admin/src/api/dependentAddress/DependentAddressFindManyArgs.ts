import { DependentAddressWhereInput } from "./DependentAddressWhereInput";
import { DependentAddressOrderByInput } from "./DependentAddressOrderByInput";

export type DependentAddressFindManyArgs = {
  where?: DependentAddressWhereInput;
  orderBy?: Array<DependentAddressOrderByInput>;
  skip?: number;
  take?: number;
};
