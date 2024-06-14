import { RequestUpdateManyWithoutWorkersInput } from "./RequestUpdateManyWithoutWorkersInput";

export type WorkerUpdateInput = {
  cnpj?: string | null;
  companyName?: string | null;
  cpf?: string;
  ctpsNumber?: string | null;
  ctpsSeries?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  request?: RequestUpdateManyWithoutWorkersInput;
  status?: string | null;
  typeField?: string | null;
};
