import { SortOrder } from "../../util/SortOrder";

export type WorkerOrderByInput = {
  cnpj?: SortOrder;
  companyName?: SortOrder;
  cpf?: SortOrder;
  ctpsNumber?: SortOrder;
  ctpsSeries?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  request?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
};
