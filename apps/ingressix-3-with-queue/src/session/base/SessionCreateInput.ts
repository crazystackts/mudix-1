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
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import {
  ValidateNested,
  IsInt,
  IsOptional,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderItemCreateNestedManyWithoutSessionsInput } from "./OrderItemCreateNestedManyWithoutSessionsInput";
import { OrderCreateNestedManyWithoutSessionsInput } from "./OrderCreateNestedManyWithoutSessionsInput";
import { QueuePositionCreateNestedManyWithoutSessionsInput } from "./QueuePositionCreateNestedManyWithoutSessionsInput";
import { TicketCreateNestedManyWithoutSessionsInput } from "./TicketCreateNestedManyWithoutSessionsInput";

@InputType()
class SessionCreateInput {
  @ApiProperty({
    required: true,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @Field(() => EventWhereUniqueInput)
  events!: EventWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maxTickets!: number;

  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutSessionsInput, {
    nullable: true,
  })
  orderItems?: OrderItemCreateNestedManyWithoutSessionsInput;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutSessionsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutSessionsInput;

  @ApiProperty({
    required: false,
    type: () => QueuePositionCreateNestedManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => QueuePositionCreateNestedManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => QueuePositionCreateNestedManyWithoutSessionsInput, {
    nullable: true,
  })
  queuePositions?: QueuePositionCreateNestedManyWithoutSessionsInput;

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
    type: () => TicketCreateNestedManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutSessionsInput, {
    nullable: true,
  })
  tickets?: TicketCreateNestedManyWithoutSessionsInput;
}

export { SessionCreateInput as SessionCreateInput };
