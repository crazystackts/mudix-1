import { JsonValue } from "type-fest";

export type Worker = {
  cnpj: string | null;
  companyName: string | null;
  cpf: string;
  ctpsNumber: string | null;
  ctpsSeries: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  request: JsonValue;
  status: string | null;
  typeField: string | null;
};
