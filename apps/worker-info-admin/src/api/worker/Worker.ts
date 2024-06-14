import { Request } from "../request/Request";

export type Worker = {
  cnpj: string | null;
  companyName: string | null;
  cpf: string;
  ctpsNumber: string | null;
  ctpsSeries: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  request?: Array<Request>;
  status: string | null;
  typeField: string | null;
};
