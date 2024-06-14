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
import { SocioeconomicInfoWhereUniqueInput } from "./SocioeconomicInfoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SocioeconomicInfoUpdateInput } from "./SocioeconomicInfoUpdateInput";

@ArgsType()
class UpdateSocioeconomicInfoArgs {
  @ApiProperty({
    required: true,
    type: () => SocioeconomicInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SocioeconomicInfoWhereUniqueInput)
  @Field(() => SocioeconomicInfoWhereUniqueInput, { nullable: false })
  where!: SocioeconomicInfoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SocioeconomicInfoUpdateInput,
  })
  @ValidateNested()
  @Type(() => SocioeconomicInfoUpdateInput)
  @Field(() => SocioeconomicInfoUpdateInput, { nullable: false })
  data!: SocioeconomicInfoUpdateInput;
}

export { UpdateSocioeconomicInfoArgs as UpdateSocioeconomicInfoArgs };