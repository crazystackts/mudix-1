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
import { HolderWhereUniqueInput } from "../../holder/base/HolderWhereUniqueInput";
import { ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PhoneCreateInput {
  @ApiProperty({
    required: true,
    type: () => HolderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HolderWhereUniqueInput)
  @Field(() => HolderWhereUniqueInput)
  holder!: HolderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  numberField?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { PhoneCreateInput as PhoneCreateInput };
