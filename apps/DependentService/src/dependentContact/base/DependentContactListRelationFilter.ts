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
import { DependentContactWhereInput } from "./DependentContactWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DependentContactListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DependentContactWhereInput,
  })
  @ValidateNested()
  @Type(() => DependentContactWhereInput)
  @IsOptional()
  @Field(() => DependentContactWhereInput, {
    nullable: true,
  })
  every?: DependentContactWhereInput;

  @ApiProperty({
    required: false,
    type: () => DependentContactWhereInput,
  })
  @ValidateNested()
  @Type(() => DependentContactWhereInput)
  @IsOptional()
  @Field(() => DependentContactWhereInput, {
    nullable: true,
  })
  some?: DependentContactWhereInput;

  @ApiProperty({
    required: false,
    type: () => DependentContactWhereInput,
  })
  @ValidateNested()
  @Type(() => DependentContactWhereInput)
  @IsOptional()
  @Field(() => DependentContactWhereInput, {
    nullable: true,
  })
  none?: DependentContactWhereInput;
}
export { DependentContactListRelationFilter as DependentContactListRelationFilter };
