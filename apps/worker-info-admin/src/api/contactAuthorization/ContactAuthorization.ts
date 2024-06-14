import { Holder } from "../holder/Holder";

export type ContactAuthorization = {
  email: boolean | null;
  holder?: Holder;
  id: string;
  push: boolean | null;
  sms: boolean | null;
};
