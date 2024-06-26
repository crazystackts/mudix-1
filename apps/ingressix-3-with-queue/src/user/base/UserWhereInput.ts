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
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../../notification/base/NotificationListRelationFilter";
import { QueueActionListRelationFilter } from "../../queueAction/base/QueueActionListRelationFilter";
import { QueuePositionListRelationFilter } from "../../queuePosition/base/QueuePositionListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customers?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => NotificationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NotificationListRelationFilter)
  @IsOptional()
  @Field(() => NotificationListRelationFilter, {
    nullable: true,
  })
  notifications?: NotificationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QueueActionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QueueActionListRelationFilter)
  @IsOptional()
  @Field(() => QueueActionListRelationFilter, {
    nullable: true,
  })
  queueActions?: QueueActionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QueuePositionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QueuePositionListRelationFilter)
  @IsOptional()
  @Field(() => QueuePositionListRelationFilter, {
    nullable: true,
  })
  queuePositions?: QueuePositionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  role?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  userName?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
