import { Holder } from "../holder/Holder";

export type Phone = {
  holder?: Holder;
  id: string;
  numberField: string | null;
  typeField: string | null;
};
