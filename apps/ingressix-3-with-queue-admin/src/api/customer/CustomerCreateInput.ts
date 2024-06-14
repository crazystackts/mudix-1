import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { UserCreateNestedManyWithoutCustomersInput } from "./UserCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerCpf: bigint;
  customerCredential: bigint;
  customerName: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  users?: UserCreateNestedManyWithoutCustomersInput;
};
