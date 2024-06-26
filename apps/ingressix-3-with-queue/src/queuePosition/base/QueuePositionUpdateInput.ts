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
import { IsInt, IsOptional, ValidateNested } from "class-validator";
import { QueueWhereUniqueInput } from "../../queue/base/QueueWhereUniqueInput";
import { Type } from "class-transformer";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class QueuePositionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  posicaoAtual?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  priorityLevel?: number;

  @ApiProperty({
    required: false,
    type: () => QueueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QueueWhereUniqueInput)
  @IsOptional()
  @Field(() => QueueWhereUniqueInput, {
    nullable: true,
  })
  queues?: QueueWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereUniqueInput)
  @IsOptional()
  @Field(() => SessionWhereUniqueInput, {
    nullable: true,
  })
  sessions?: SessionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  users?: UserWhereUniqueInput;
}

export { QueuePositionUpdateInput as QueuePositionUpdateInput };
