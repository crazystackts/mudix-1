/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QueueHistoryWhereUniqueInput } from "../../queueHistory/base/QueueHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QueueHistoryUpdateManyWithoutQueuesInput {
  @Field(() => [QueueHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueHistoryWhereUniqueInput],
  })
  connect?: Array<QueueHistoryWhereUniqueInput>;

  @Field(() => [QueueHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueHistoryWhereUniqueInput],
  })
  disconnect?: Array<QueueHistoryWhereUniqueInput>;

  @Field(() => [QueueHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueHistoryWhereUniqueInput],
  })
  set?: Array<QueueHistoryWhereUniqueInput>;
}

export { QueueHistoryUpdateManyWithoutQueuesInput as QueueHistoryUpdateManyWithoutQueuesInput };
