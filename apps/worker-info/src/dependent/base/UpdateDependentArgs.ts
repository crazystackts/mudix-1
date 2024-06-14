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
import { DependentWhereUniqueInput } from "./DependentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DependentUpdateInput } from "./DependentUpdateInput";

@ArgsType()
class UpdateDependentArgs {
  @ApiProperty({
    required: true,
    type: () => DependentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DependentWhereUniqueInput)
  @Field(() => DependentWhereUniqueInput, { nullable: false })
  where!: DependentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DependentUpdateInput,
  })
  @ValidateNested()
  @Type(() => DependentUpdateInput)
  @Field(() => DependentUpdateInput, { nullable: false })
  data!: DependentUpdateInput;
}

export { UpdateDependentArgs as UpdateDependentArgs };
