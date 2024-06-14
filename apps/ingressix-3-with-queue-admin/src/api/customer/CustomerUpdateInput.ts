import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { UserUpdateManyWithoutCustomersInput } from "./UserUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerCpf?: bigint;
  customerCredential?: bigint;
  customerName?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
  users?: UserUpdateManyWithoutCustomersInput;
};
