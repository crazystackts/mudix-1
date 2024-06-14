import { Holder } from "../holder/Holder";

export type Address = {
  city: string | null;
  complement: string | null;
  holder?: Holder;
  id: string;
  neighborhood: string | null;
  numberField: number | null;
  state: string | null;
  street: string | null;
  title: string | null;
  zip: string | null;
};
