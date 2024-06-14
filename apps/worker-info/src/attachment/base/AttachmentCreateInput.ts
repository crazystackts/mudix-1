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
import { FileCreateNestedManyWithoutAttachmentsInput } from "./FileCreateNestedManyWithoutAttachmentsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { HolderWhereUniqueInput } from "../../holder/base/HolderWhereUniqueInput";

@InputType()
class AttachmentCreateInput {
  @ApiProperty({
    required: false,
    type: () => FileCreateNestedManyWithoutAttachmentsInput,
  })
  @ValidateNested()
  @Type(() => FileCreateNestedManyWithoutAttachmentsInput)
  @IsOptional()
  @Field(() => FileCreateNestedManyWithoutAttachmentsInput, {
    nullable: true,
  })
  files?: FileCreateNestedManyWithoutAttachmentsInput;

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

  @ApiProperty({
    required: true,
    type: () => HolderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HolderWhereUniqueInput)
  @Field(() => HolderWhereUniqueInput)
  holder!: HolderWhereUniqueInput;
}

export { AttachmentCreateInput as AttachmentCreateInput };