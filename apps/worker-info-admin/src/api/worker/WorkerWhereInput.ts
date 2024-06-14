import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";

export type WorkerWhereInput = {
  cnpj?: StringNullableFilter;
  companyName?: StringNullableFilter;
  cpf?: StringFilter;
  ctpsNumber?: StringNullableFilter;
  ctpsSeries?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  request?: RequestListRelationFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
