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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { HolderWhereUniqueInput } from "../../holder/base/HolderWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class EditedFieldCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fieldName?: string | null;

  @ApiProperty({
    required: true,
    type: () => HolderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HolderWhereUniqueInput)
  @Field(() => HolderWhereUniqueInput)
  holder!: HolderWhereUniqueInput;
}

export { EditedFieldCreateInput as EditedFieldCreateInput };
