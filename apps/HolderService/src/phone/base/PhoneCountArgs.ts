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
import { PhoneWhereInput } from "./PhoneWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PhoneCountArgs {
  @ApiProperty({
    required: false,
    type: () => PhoneWhereInput,
  })
  @Field(() => PhoneWhereInput, { nullable: true })
  @Type(() => PhoneWhereInput)
  where?: PhoneWhereInput;
}

export { PhoneCountArgs as PhoneCountArgs };