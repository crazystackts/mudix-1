/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentHistoryWhereUniqueInput } from "../../paymentHistory/base/PaymentHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentHistoryUpdateManyWithoutOrdersInput {
  @Field(() => [PaymentHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentHistoryWhereUniqueInput],
  })
  connect?: Array<PaymentHistoryWhereUniqueInput>;

  @Field(() => [PaymentHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentHistoryWhereUniqueInput],
  })
  disconnect?: Array<PaymentHistoryWhereUniqueInput>;

  @Field(() => [PaymentHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentHistoryWhereUniqueInput],
  })
  set?: Array<PaymentHistoryWhereUniqueInput>;
}

export { PaymentHistoryUpdateManyWithoutOrdersInput as PaymentHistoryUpdateManyWithoutOrdersInput };