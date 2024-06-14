import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DependentListRelationFilter } from "../dependent/DependentListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { HolderListRelationFilter } from "../holder/HolderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkerWhereUniqueInput } from "../worker/WorkerWhereUniqueInput";

export type RequestWhereInput = {
  channel?: StringNullableFilter;
  dependents?: DependentListRelationFilter;
  finalize?: BooleanNullableFilter;
  holder?: HolderListRelationFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  renewal?: BooleanNullableFilter;
  step?: StringNullableFilter;
  typeField?: StringNullableFilter;
  worker?: WorkerWhereUniqueInput;
};
