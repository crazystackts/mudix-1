/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsDate } from "class-validator";
import { Order } from "../../order/base/Order";
import { Type } from "class-transformer";
import { Session } from "../../session/base/Session";

@ObjectType()
class OrderItem {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  order?: Order;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  orderItemDateTime!: Date;

  @ApiProperty({
    required: true,
    type: () => Session,
  })
  @ValidateNested()
  @Type(() => Session)
  session?: Session;
}

export { OrderItem as OrderItem };
