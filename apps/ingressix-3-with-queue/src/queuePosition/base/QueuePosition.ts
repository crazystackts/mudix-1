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
import {
  IsString,
  IsDate,
  IsInt,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Queue } from "../../queue/base/Queue";
import { Session } from "../../session/base/Session";
import { User } from "../../user/base/User";

@ObjectType()
class QueuePosition {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  joinedAt!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  posicaoAtual!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  priorityLevel!: number;

  @ApiProperty({
    required: true,
    type: () => Queue,
  })
  @ValidateNested()
  @Type(() => Queue)
  queues?: Queue;

  @ApiProperty({
    required: false,
    type: () => Session,
  })
  @ValidateNested()
  @Type(() => Session)
  @IsOptional()
  sessions?: Session | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  users?: User;
}

export { QueuePosition as QueuePosition };