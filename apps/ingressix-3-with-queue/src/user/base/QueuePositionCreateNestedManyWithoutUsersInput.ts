/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QueuePositionWhereUniqueInput } from "../../queuePosition/base/QueuePositionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QueuePositionCreateNestedManyWithoutUsersInput {
  @Field(() => [QueuePositionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueuePositionWhereUniqueInput],
  })
  connect?: Array<QueuePositionWhereUniqueInput>;
}

export { QueuePositionCreateNestedManyWithoutUsersInput as QueuePositionCreateNestedManyWithoutUsersInput };
