import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerCpf?: bigint;
  customerCredential?: bigint;
  customerName?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
