import { Order } from "../order/Order";
import { User } from "../user/User";

export type Customer = {
  customerCpf: bigint;
  customerCredential: bigint;
  customerName: string;
  id: number;
  orders?: Array<Order>;
  users?: Array<User>;
};
