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
import { Dependent } from "../../dependent/base/Dependent";
import { ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class DependentContact {
  @ApiProperty({
    required: true,
    type: () => Dependent,
  })
  @ValidateNested()
  @Type(() => Dependent)
  dependents?: Dependent;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { DependentContact as DependentContact };
