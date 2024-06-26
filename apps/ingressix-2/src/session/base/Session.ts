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
import { Event } from "../../event/base/Event";
import {
  ValidateNested,
  IsString,
  IsInt,
  IsOptional,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Ticket } from "../../ticket/base/Ticket";

@ObjectType()
class Session {
  @ApiProperty({
    required: true,
    type: () => Event,
  })
  @ValidateNested()
  @Type(() => Event)
  event?: Event;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maxTickets!: number;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  order?: Array<Order>;

  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  orderItems?: Array<OrderItem>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  remainingTickets!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  saleEndDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  saleStartDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  sessionDateTime!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  sessionStatus!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  sessionType!: string;

  @ApiProperty({
    required: false,
    type: () => [Ticket],
  })
  @ValidateNested()
  @Type(() => Ticket)
  @IsOptional()
  tickets?: Array<Ticket>;
}

export { Session as Session };
