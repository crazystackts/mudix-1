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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderItemListRelationFilter } from "../../orderItem/base/OrderItemListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { QueuePositionListRelationFilter } from "../../queuePosition/base/QueuePositionListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TicketListRelationFilter } from "../../ticket/base/TicketListRelationFilter";

@InputType()
class SessionWhereInput {
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
  events?: EventWhereUniqueInput;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  maxTickets?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => OrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderItemListRelationFilter)
  @IsOptional()
  @Field(() => OrderItemListRelationFilter, {
    nullable: true,
  })
  orderItems?: OrderItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  orders?: OrderListRelationFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  remainingTickets?: IntFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  saleEndDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  saleStartDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  sessionDateTime?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  sessionStatus?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  sessionType?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TicketListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TicketListRelationFilter)
  @IsOptional()
  @Field(() => TicketListRelationFilter, {
    nullable: true,
  })
  tickets?: TicketListRelationFilter;
}

export { SessionWhereInput as SessionWhereInput };