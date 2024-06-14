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
import {
  IsString,
  IsOptional,
  IsDate,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { DependentAddressUpdateManyWithoutDependentsInput } from "./DependentAddressUpdateManyWithoutDependentsInput";
import { DependentAttachmentUpdateManyWithoutDependentsInput } from "./DependentAttachmentUpdateManyWithoutDependentsInput";
import { DependentContactAuthorizationWhereUniqueInput } from "../../dependentContactAuthorization/base/DependentContactAuthorizationWhereUniqueInput";
import { DependentContactUpdateManyWithoutDependentsInput } from "./DependentContactUpdateManyWithoutDependentsInput";
import { DependentDocumentUpdateManyWithoutDependentsInput } from "./DependentDocumentUpdateManyWithoutDependentsInput";
import { DependentPhoneUpdateManyWithoutDependentsInput } from "./DependentPhoneUpdateManyWithoutDependentsInput";
import { RequestWhereUniqueInput } from "../../request/base/RequestWhereUniqueInput";

@InputType()
class DependentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  affectionateFirstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  affectionateLastName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  complete?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  credential?: string | null;

  @ApiProperty({
    required: false,
    type: () => DependentAddressUpdateManyWithoutDependentsInput,
  })
  @ValidateNested()
  @Type(() => DependentAddressUpdateManyWithoutDependentsInput)
  @IsOptional()
  @Field(() => DependentAddressUpdateManyWithoutDependentsInput, {
    nullable: true,
  })
  dependentAddresses?: DependentAddressUpdateManyWithoutDependentsInput;

  @ApiProperty({
    required: false,
    type: () => DependentAttachmentUpdateManyWithoutDependentsInput,
  })
  @ValidateNested()
  @Type(() => DependentAttachmentUpdateManyWithoutDependentsInput)
  @IsOptional()
  @Field(() => DependentAttachmentUpdateManyWithoutDependentsInput, {
    nullable: true,
  })
  dependentAttachments?: DependentAttachmentUpdateManyWithoutDependentsInput;

  @ApiProperty({
    required: false,
    type: () => DependentContactAuthorizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DependentContactAuthorizationWhereUniqueInput)
  @IsOptional()
  @Field(() => DependentContactAuthorizationWhereUniqueInput, {
    nullable: true,
  })
  dependentContactAuthorization?: DependentContactAuthorizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DependentContactUpdateManyWithoutDependentsInput,
  })
  @ValidateNested()
  @Type(() => DependentContactUpdateManyWithoutDependentsInput)
  @IsOptional()
  @Field(() => DependentContactUpdateManyWithoutDependentsInput, {
    nullable: true,
  })
  dependentContacts?: DependentContactUpdateManyWithoutDependentsInput;

  @ApiProperty({
    required: false,
    type: () => DependentDocumentUpdateManyWithoutDependentsInput,
  })
  @ValidateNested()
  @Type(() => DependentDocumentUpdateManyWithoutDependentsInput)
  @IsOptional()
  @Field(() => DependentDocumentUpdateManyWithoutDependentsInput, {
    nullable: true,
  })
  dependentDocuments?: DependentDocumentUpdateManyWithoutDependentsInput;

  @ApiProperty({
    required: false,
    type: () => DependentPhoneUpdateManyWithoutDependentsInput,
  })
  @ValidateNested()
  @Type(() => DependentPhoneUpdateManyWithoutDependentsInput)
  @IsOptional()
  @Field(() => DependentPhoneUpdateManyWithoutDependentsInput, {
    nullable: true,
  })
  dependentPhones?: DependentPhoneUpdateManyWithoutDependentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  education?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  exclude?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  maritalStatus?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relationship?: string | null;

  @ApiProperty({
    required: false,
    type: () => RequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RequestWhereUniqueInput)
  @IsOptional()
  @Field(() => RequestWhereUniqueInput, {
    nullable: true,
  })
  request?: RequestWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  socialFirstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  socialLastName?: string | null;
}

export { DependentUpdateInput as DependentUpdateInput };