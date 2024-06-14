import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  cpf?: bigint;
  credential?: bigint;
  name?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
