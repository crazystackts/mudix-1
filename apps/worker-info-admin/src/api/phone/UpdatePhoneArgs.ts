import { PhoneWhereUniqueInput } from "./PhoneWhereUniqueInput";
import { PhoneUpdateInput } from "./PhoneUpdateInput";

export type UpdatePhoneArgs = {
  where: PhoneWhereUniqueInput;
  data: PhoneUpdateInput;
};
