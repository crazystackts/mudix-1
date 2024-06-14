/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QueueActionWhereUniqueInput } from "../../queueAction/base/QueueActionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QueueActionUpdateManyWithoutQueuesInput {
  @Field(() => [QueueActionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueActionWhereUniqueInput],
  })
  connect?: Array<QueueActionWhereUniqueInput>;

  @Field(() => [QueueActionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueActionWhereUniqueInput],
  })
  disconnect?: Array<QueueActionWhereUniqueInput>;

  @Field(() => [QueueActionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueActionWhereUniqueInput],
  })
  set?: Array<QueueActionWhereUniqueInput>;
}

export { QueueActionUpdateManyWithoutQueuesInput as QueueActionUpdateManyWithoutQueuesInput };