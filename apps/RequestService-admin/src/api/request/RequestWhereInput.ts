import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RequestWhereInput = {
  channel?: StringNullableFilter;
  dependents?: JsonFilter;
  finalize?: BooleanNullableFilter;
  holder?: JsonFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  renewal?: BooleanNullableFilter;
  step?: StringNullableFilter;
  typeField?: StringNullableFilter;
  workerId?: StringFilter;
};
