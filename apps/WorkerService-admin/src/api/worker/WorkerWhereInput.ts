import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type WorkerWhereInput = {
  cnpj?: StringNullableFilter;
  companyName?: StringNullableFilter;
  cpf?: StringFilter;
  ctpsNumber?: StringNullableFilter;
  ctpsSeries?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  request?: JsonFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
