import { Holder } from "../holder/Holder";

export type Document = {
  holder?: Holder;
  id: string;
  issuer: string | null;
  numberField: string | null;
  typeField: string | null;
};
