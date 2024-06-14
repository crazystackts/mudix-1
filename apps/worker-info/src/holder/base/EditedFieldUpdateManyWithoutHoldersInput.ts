/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EditedFieldWhereUniqueInput } from "../../editedField/base/EditedFieldWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EditedFieldUpdateManyWithoutHoldersInput {
  @Field(() => [EditedFieldWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EditedFieldWhereUniqueInput],
  })
  connect?: Array<EditedFieldWhereUniqueInput>;

  @Field(() => [EditedFieldWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EditedFieldWhereUniqueInput],
  })
  disconnect?: Array<EditedFieldWhereUniqueInput>;

  @Field(() => [EditedFieldWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EditedFieldWhereUniqueInput],
  })
  set?: Array<EditedFieldWhereUniqueInput>;
}

export { EditedFieldUpdateManyWithoutHoldersInput as EditedFieldUpdateManyWithoutHoldersInput };