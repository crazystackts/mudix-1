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
import { DependentFileWhereInput } from "./DependentFileWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DependentFileCountArgs {
  @ApiProperty({
    required: false,
    type: () => DependentFileWhereInput,
  })
  @Field(() => DependentFileWhereInput, { nullable: true })
  @Type(() => DependentFileWhereInput)
  where?: DependentFileWhereInput;
}

export { DependentFileCountArgs as DependentFileCountArgs };
