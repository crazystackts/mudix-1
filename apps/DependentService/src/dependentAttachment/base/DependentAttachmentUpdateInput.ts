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
import { DependentFileUpdateManyWithoutDependentAttachmentsInput } from "./DependentFileUpdateManyWithoutDependentAttachmentsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DependentAttachmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DependentFileUpdateManyWithoutDependentAttachmentsInput,
  })
  @ValidateNested()
  @Type(() => DependentFileUpdateManyWithoutDependentAttachmentsInput)
  @IsOptional()
  @Field(() => DependentFileUpdateManyWithoutDependentAttachmentsInput, {
    nullable: true,
  })
  dependentFiles?: DependentFileUpdateManyWithoutDependentAttachmentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dependentsId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  group?: string | null;
}

export { DependentAttachmentUpdateInput as DependentAttachmentUpdateInput };
