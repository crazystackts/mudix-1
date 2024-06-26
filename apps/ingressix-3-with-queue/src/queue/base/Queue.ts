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
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Notification } from "../../notification/base/Notification";
import { QueueAction } from "../../queueAction/base/QueueAction";
import { QueueHistory } from "../../queueHistory/base/QueueHistory";
import { QueuePosition } from "../../queuePosition/base/QueuePosition";

@ObjectType()
class Queue {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => [Notification],
  })
  @ValidateNested()
  @Type(() => Notification)
  @IsOptional()
  notifications?: Array<Notification>;

  @ApiProperty({
    required: false,
    type: () => [QueueAction],
  })
  @ValidateNested()
  @Type(() => QueueAction)
  @IsOptional()
  queueActions?: Array<QueueAction>;

  @ApiProperty({
    required: false,
    type: () => [QueueHistory],
  })
  @ValidateNested()
  @Type(() => QueueHistory)
  @IsOptional()
  queueHistories?: Array<QueueHistory>;

  @ApiProperty({
    required: false,
    type: () => [QueuePosition],
  })
  @ValidateNested()
  @Type(() => QueuePosition)
  @IsOptional()
  queuePositions?: Array<QueuePosition>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Queue as Queue };
