import { Order } from "../order/Order";

export type Customer = {
  customerCpf: bigint;
  customerCredential: bigint;
  customerName: string;
  id: number;
  orders?: Array<Order>;
};
