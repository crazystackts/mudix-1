import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { QueueActionCreateNestedManyWithoutUsersInput } from "./QueueActionCreateNestedManyWithoutUsersInput";
import { QueuePositionCreateNestedManyWithoutUsersInput } from "./QueuePositionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  customers?: CustomerWhereUniqueInput | null;
  email: string;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  queueActions?: QueueActionCreateNestedManyWithoutUsersInput;
  queuePositions?: QueuePositionCreateNestedManyWithoutUsersInput;
  role: string;
  userName: string;
};
