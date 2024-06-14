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
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { ItemUpdateManyWithoutSessionsInput } from "./ItemUpdateManyWithoutSessionsInput";
import { TicketUpdateManyWithoutSessionsInput } from "./TicketUpdateManyWithoutSessionsInput";

@InputType()
class SessionUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateTime?: Date;

  @ApiProperty({
    required: false,
    type: () => EventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventWhereUniqueInput)
  @IsOptional()
  @Field(() => EventWhereUniqueInput, {
    nullable: true,
  })
  event?: EventWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ItemUpdateManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => ItemUpdateManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => ItemUpdateManyWithoutSessionsInput, {
    nullable: true,
  })
  items?: ItemUpdateManyWithoutSessionsInput;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutSessionsInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutSessionsInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutSessionsInput, {
    nullable: true,
  })
  tickets?: TicketUpdateManyWithoutSessionsInput;
}

export { SessionUpdateInput as SessionUpdateInput };