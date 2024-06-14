import { Order } from "../order/Order";

export type Customer = {
  cpf: bigint;
  credential: bigint;
  id: number;
  name: string;
  orders?: Array<Order>;
};
