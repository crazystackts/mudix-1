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
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ValidateNested, IsString, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: true,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput)
  categories!: CategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventClassification!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventDetail!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  eventDuration!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventImage!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventStatus!: string;

  @ApiProperty({
    required: true,
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @Field(() => LocationWhereUniqueInput)
  locations!: LocationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SessionCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => SessionCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => SessionCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: true,
    type: () => UnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereUniqueInput)
  @Field(() => UnitWhereUniqueInput)
  units!: UnitWhereUniqueInput;
}

export { EventCreateInput as EventCreateInput };