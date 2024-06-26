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
import { IsDate, ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Event } from "../../event/base/Event";
import { Item } from "../../item/base/Item";
import { Ticket } from "../../ticket/base/Ticket";

@ObjectType()
class Session {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateTime!: Date;

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
    required: false,
    type: () => [Item],
  })
  @ValidateNested()
  @Type(() => Item)
  @IsOptional()
  items?: Array<Item>;

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
