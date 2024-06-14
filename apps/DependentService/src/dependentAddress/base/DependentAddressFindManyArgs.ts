/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DependentAddressWhereInput } from "./DependentAddressWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DependentAddressOrderByInput } from "./DependentAddressOrderByInput";

@ArgsType()
class DependentAddressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DependentAddressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DependentAddressWhereInput, { nullable: true })
  @Type(() => DependentAddressWhereInput)
  where?: DependentAddressWhereInput;

  @ApiProperty({
    required: false,
    type: [DependentAddressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DependentAddressOrderByInput], { nullable: true })
  @Type(() => DependentAddressOrderByInput)
  orderBy?: Array<DependentAddressOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DependentAddressFindManyArgs as DependentAddressFindManyArgs };