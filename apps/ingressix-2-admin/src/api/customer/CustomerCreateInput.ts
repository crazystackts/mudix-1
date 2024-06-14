import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerCpf: bigint;
  customerCredential: bigint;
  customerName: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
