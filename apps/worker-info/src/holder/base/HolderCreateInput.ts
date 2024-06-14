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
import { AddressCreateNestedManyWithoutHoldersInput } from "./AddressCreateNestedManyWithoutHoldersInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { AttachmentCreateNestedManyWithoutHoldersInput } from "./AttachmentCreateNestedManyWithoutHoldersInput";
import { ContactAuthorizationWhereUniqueInput } from "../../contactAuthorization/base/ContactAuthorizationWhereUniqueInput";
import { ContactCreateNestedManyWithoutHoldersInput } from "./ContactCreateNestedManyWithoutHoldersInput";
import { DocumentCreateNestedManyWithoutHoldersInput } from "./DocumentCreateNestedManyWithoutHoldersInput";
import { EditedFieldCreateNestedManyWithoutHoldersInput } from "./EditedFieldCreateNestedManyWithoutHoldersInput";
import { FilialCreateNestedManyWithoutHoldersInput } from "./FilialCreateNestedManyWithoutHoldersInput";
import { PhoneCreateNestedManyWithoutHoldersInput } from "./PhoneCreateNestedManyWithoutHoldersInput";
import { RequestWhereUniqueInput } from "../../request/base/RequestWhereUniqueInput";
import { SocioeconomicInfoCreateNestedManyWithoutHoldersInput } from "./SocioeconomicInfoCreateNestedManyWithoutHoldersInput";

@InputType()
class HolderCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => AddressCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  addresses?: AddressCreateNestedManyWithoutHoldersInput;

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
  affectionateGender?: string | null;

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
    type: () => AttachmentCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => AttachmentCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => AttachmentCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  attachments?: AttachmentCreateNestedManyWithoutHoldersInput;

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
    type: () => ContactAuthorizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactAuthorizationWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactAuthorizationWhereUniqueInput, {
    nullable: true,
  })
  contactAuthorization?: ContactAuthorizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ContactCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => ContactCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => ContactCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  contacts?: ContactCreateNestedManyWithoutHoldersInput;

  @ApiProperty({
    required: false,
    type: () => DocumentCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => DocumentCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => DocumentCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  documents?: DocumentCreateNestedManyWithoutHoldersInput;

  @ApiProperty({
    required: false,
    type: () => EditedFieldCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => EditedFieldCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => EditedFieldCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  editedFields?: EditedFieldCreateNestedManyWithoutHoldersInput;

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
    type: () => FilialCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => FilialCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => FilialCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  filial?: FilialCreateNestedManyWithoutHoldersInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PhoneCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => PhoneCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => PhoneCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  phones?: PhoneCreateNestedManyWithoutHoldersInput;

  @ApiProperty({
    required: true,
    type: () => RequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RequestWhereUniqueInput)
  @Field(() => RequestWhereUniqueInput)
  request!: RequestWhereUniqueInput;

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
  socialGender?: string | null;

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

  @ApiProperty({
    required: false,
    type: () => SocioeconomicInfoCreateNestedManyWithoutHoldersInput,
  })
  @ValidateNested()
  @Type(() => SocioeconomicInfoCreateNestedManyWithoutHoldersInput)
  @IsOptional()
  @Field(() => SocioeconomicInfoCreateNestedManyWithoutHoldersInput, {
    nullable: true,
  })
  socioeconomicInfo?: SocioeconomicInfoCreateNestedManyWithoutHoldersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  token?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { HolderCreateInput as HolderCreateInput };
