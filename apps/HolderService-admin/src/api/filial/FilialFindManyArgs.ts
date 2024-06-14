import { FilialWhereInput } from "./FilialWhereInput";
import { FilialOrderByInput } from "./FilialOrderByInput";

export type FilialFindManyArgs = {
  where?: FilialWhereInput;
  orderBy?: Array<FilialOrderByInput>;
  skip?: number;
  take?: number;
};
