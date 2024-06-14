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
import { DependentDocumentWhereInput } from "./DependentDocumentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DependentDocumentOrderByInput } from "./DependentDocumentOrderByInput";

@ArgsType()
class DependentDocumentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DependentDocumentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DependentDocumentWhereInput, { nullable: true })
  @Type(() => DependentDocumentWhereInput)
  where?: DependentDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: [DependentDocumentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DependentDocumentOrderByInput], { nullable: true })
  @Type(() => DependentDocumentOrderByInput)
  orderBy?: Array<DependentDocumentOrderByInput>;

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

export { DependentDocumentFindManyArgs as DependentDocumentFindManyArgs };