/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ValidateNested, IsNumber, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentHistoryCreateInput {
  @ApiProperty({
    required: true,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @Field(() => OrderWhereUniqueInput)
  order!: OrderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  paymentAmount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  paymentDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  paymentMethod!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  paymentStatus!: string;
}

export { PaymentHistoryCreateInput as PaymentHistoryCreateInput };
