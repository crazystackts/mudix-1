import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { QueueActionUpdateManyWithoutUsersInput } from "./QueueActionUpdateManyWithoutUsersInput";
import { QueuePositionUpdateManyWithoutUsersInput } from "./QueuePositionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  customers?: CustomerWhereUniqueInput | null;
  email?: string;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  queueActions?: QueueActionUpdateManyWithoutUsersInput;
  queuePositions?: QueuePositionUpdateManyWithoutUsersInput;
  role?: string;
  userName?: string;
};
