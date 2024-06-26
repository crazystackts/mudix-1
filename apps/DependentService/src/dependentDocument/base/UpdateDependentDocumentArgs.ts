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
import { DependentDocumentWhereUniqueInput } from "./DependentDocumentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DependentDocumentUpdateInput } from "./DependentDocumentUpdateInput";

@ArgsType()
class UpdateDependentDocumentArgs {
  @ApiProperty({
    required: true,
    type: () => DependentDocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DependentDocumentWhereUniqueInput)
  @Field(() => DependentDocumentWhereUniqueInput, { nullable: false })
  where!: DependentDocumentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DependentDocumentUpdateInput,
  })
  @ValidateNested()
  @Type(() => DependentDocumentUpdateInput)
  @Field(() => DependentDocumentUpdateInput, { nullable: false })
  data!: DependentDocumentUpdateInput;
}

export { UpdateDependentDocumentArgs as UpdateDependentDocumentArgs };
