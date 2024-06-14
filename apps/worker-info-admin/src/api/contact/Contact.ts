import { Holder } from "../holder/Holder";

export type Contact = {
  email: string | null;
  holder?: Holder;
  id: string;
};
