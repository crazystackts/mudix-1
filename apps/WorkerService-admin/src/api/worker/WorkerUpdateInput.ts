import { InputJsonValue } from "../../types";

export type WorkerUpdateInput = {
  cnpj?: string | null;
  companyName?: string | null;
  cpf?: string;
  ctpsNumber?: string | null;
  ctpsSeries?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  request?: InputJsonValue;
  status?: string | null;
  typeField?: string | null;
};
