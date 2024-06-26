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
import { IsDate, IsInt, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { Session } from "../../session/base/Session";
import { Ticket } from "../../ticket/base/Ticket";

@ObjectType()
class Item {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateTime!: Date;

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
    type: () => Session,
  })
  @ValidateNested()
  @Type(() => Session)
  session?: Session;

  @ApiProperty({
    required: false,
    type: () => [Ticket],
  })
  @ValidateNested()
  @Type(() => Ticket)
  @IsOptional()
  tickets?: Array<Ticket>;
}

export { Item as Item };
