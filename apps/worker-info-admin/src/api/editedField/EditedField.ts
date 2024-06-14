import { Holder } from "../holder/Holder";

export type EditedField = {
  fieldName: string | null;
  holder?: Holder;
  id: string;
};
