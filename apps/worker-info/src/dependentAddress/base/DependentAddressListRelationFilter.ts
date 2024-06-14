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
import { DependentAddressWhereInput } from "./DependentAddressWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DependentAddressListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DependentAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => DependentAddressWhereInput)
  @IsOptional()
  @Field(() => DependentAddressWhereInput, {
    nullable: true,
  })
  every?: DependentAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => DependentAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => DependentAddressWhereInput)
  @IsOptional()
  @Field(() => DependentAddressWhereInput, {
    nullable: true,
  })
  some?: DependentAddressWhereInput;

  @ApiProperty({
    required: false,
    type: () => DependentAddressWhereInput,
  })
  @ValidateNested()
  @Type(() => DependentAddressWhereInput)
  @IsOptional()
  @Field(() => DependentAddressWhereInput, {
    nullable: true,
  })
  none?: DependentAddressWhereInput;
}
export { DependentAddressListRelationFilter as DependentAddressListRelationFilter };