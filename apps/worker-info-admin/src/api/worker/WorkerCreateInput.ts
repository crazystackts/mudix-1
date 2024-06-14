import { RequestCreateNestedManyWithoutWorkersInput } from "./RequestCreateNestedManyWithoutWorkersInput";

export type WorkerCreateInput = {
  cnpj?: string | null;
  companyName?: string | null;
  cpf: string;
  ctpsNumber?: string | null;
  ctpsSeries?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  request?: RequestCreateNestedManyWithoutWorkersInput;
  status?: string | null;
  typeField?: string | null;
};
