/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Address } from "../../address/base/Address";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { Attachment } from "../../attachment/base/Attachment";
import { ContactAuthorization } from "../../contactAuthorization/base/ContactAuthorization";
import { Contact } from "../../contact/base/Contact";
import { Document } from "../../document/base/Document";
import { EditedField } from "../../editedField/base/EditedField";
import { Filial } from "../../filial/base/Filial";
import { Phone } from "../../phone/base/Phone";
import { Request } from "../../request/base/Request";
import { SocioeconomicInfo } from "../../socioeconomicInfo/base/SocioeconomicInfo";

@ObjectType()
class Holder {
  @ApiProperty({
    required: false,
    type: () => [Address],
  })
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  addresses?: Array<Address>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  affectionateFirstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  affectionateGender!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  affectionateLastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Attachment],
  })
  @ValidateNested()
  @Type(() => Attachment)
  @IsOptional()
  attachments?: Array<Attachment>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => ContactAuthorization,
  })
  @ValidateNested()
  @Type(() => ContactAuthorization)
  @IsOptional()
  contactAuthorization?: ContactAuthorization | null;

  @ApiProperty({
    required: false,
    type: () => [Contact],
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contacts?: Array<Contact>;

  @ApiProperty({
    required: false,
    type: () => [Document],
  })
  @ValidateNested()
  @Type(() => Document)
  @IsOptional()
  documents?: Array<Document>;

  @ApiProperty({
    required: false,
    type: () => [EditedField],
  })
  @ValidateNested()
  @Type(() => EditedField)
  @IsOptional()
  editedFields?: Array<EditedField>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  education!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Filial],
  })
  @ValidateNested()
  @Type(() => Filial)
  @IsOptional()
  filial?: Array<Filial>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  maritalStatus!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => [Phone],
  })
  @ValidateNested()
  @Type(() => Phone)
  @IsOptional()
  phones?: Array<Phone>;

  @ApiProperty({
    required: true,
    type: () => Request,
  })
  @ValidateNested()
  @Type(() => Request)
  request?: Request;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  socialFirstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  socialGender!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  socialLastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [SocioeconomicInfo],
  })
  @ValidateNested()
  @Type(() => SocioeconomicInfo)
  @IsOptional()
  socioeconomicInfo?: Array<SocioeconomicInfo>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  token!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { Holder as Holder };
