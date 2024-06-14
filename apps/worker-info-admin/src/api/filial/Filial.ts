import { Holder } from "../holder/Holder";

export type Filial = {
  firstName: string | null;
  holder?: Holder;
  id: string;
  lastName: string | null;
  typeField: string | null;
};
