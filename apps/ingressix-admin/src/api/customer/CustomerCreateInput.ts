import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  cpf: bigint;
  credential: bigint;
  name: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
