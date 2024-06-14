import { InputJsonValue } from "../../types";

export type WorkerCreateInput = {
  cnpj?: string | null;
  companyName?: string | null;
  cpf: string;
  ctpsNumber?: string | null;
  ctpsSeries?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  request?: InputJsonValue;
  status?: string | null;
  typeField?: string | null;
};
