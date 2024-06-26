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
import { QueueWhereInput } from "./QueueWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QueueListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QueueWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueWhereInput)
  @IsOptional()
  @Field(() => QueueWhereInput, {
    nullable: true,
  })
  every?: QueueWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueueWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueWhereInput)
  @IsOptional()
  @Field(() => QueueWhereInput, {
    nullable: true,
  })
  some?: QueueWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueueWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueWhereInput)
  @IsOptional()
  @Field(() => QueueWhereInput, {
    nullable: true,
  })
  none?: QueueWhereInput;
}
export { QueueListRelationFilter as QueueListRelationFilter };
