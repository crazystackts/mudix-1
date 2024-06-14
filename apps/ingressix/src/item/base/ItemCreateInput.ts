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
import { IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { TicketCreateNestedManyWithoutItemsInput } from "./TicketCreateNestedManyWithoutItemsInput";

@InputType()
class ItemCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateTime!: Date;

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
    type: () => SessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereUniqueInput)
  @Field(() => SessionWhereUniqueInput)
  session!: SessionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutItemsInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutItemsInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutItemsInput, {
    nullable: true,
  })
  tickets?: TicketCreateNestedManyWithoutItemsInput;
}

export { ItemCreateInput as ItemCreateInput };