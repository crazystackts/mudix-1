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
import { DependentFile } from "../../dependentFile/base/DependentFile";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Dependent } from "../../dependent/base/Dependent";

@ObjectType()
class DependentAttachment {
  @ApiProperty({
    required: false,
    type: () => [DependentFile],
  })
  @ValidateNested()
  @Type(() => DependentFile)
  @IsOptional()
  dependentFiles?: Array<DependentFile>;

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
  group!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { DependentAttachment as DependentAttachment };
