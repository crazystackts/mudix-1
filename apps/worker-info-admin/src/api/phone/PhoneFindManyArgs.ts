import { PhoneWhereInput } from "./PhoneWhereInput";
import { PhoneOrderByInput } from "./PhoneOrderByInput";

export type PhoneFindManyArgs = {
  where?: PhoneWhereInput;
  orderBy?: Array<PhoneOrderByInput>;
  skip?: number;
  take?: number;
};
