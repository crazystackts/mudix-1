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
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { QueueActionCreateNestedManyWithoutUsersInput } from "./QueueActionCreateNestedManyWithoutUsersInput";
import { QueuePositionCreateNestedManyWithoutUsersInput } from "./QueuePositionCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customers?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => QueueActionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => QueueActionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => QueueActionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  queueActions?: QueueActionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => QueuePositionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => QueuePositionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => QueuePositionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  queuePositions?: QueuePositionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  role!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  userName!: string;
}

export { UserCreateInput as UserCreateInput };
