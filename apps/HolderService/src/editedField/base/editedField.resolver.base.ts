/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { EditedField } from "./EditedField";
import { EditedFieldCountArgs } from "./EditedFieldCountArgs";
import { EditedFieldFindManyArgs } from "./EditedFieldFindManyArgs";
import { EditedFieldFindUniqueArgs } from "./EditedFieldFindUniqueArgs";
import { CreateEditedFieldArgs } from "./CreateEditedFieldArgs";
import { UpdateEditedFieldArgs } from "./UpdateEditedFieldArgs";
import { DeleteEditedFieldArgs } from "./DeleteEditedFieldArgs";
import { EditedFieldService } from "../editedField.service";
@graphql.Resolver(() => EditedField)
export class EditedFieldResolverBase {
  constructor(protected readonly service: EditedFieldService) {}

  async _editedFieldsMeta(
    @graphql.Args() args: EditedFieldCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EditedField])
  async editedFields(
    @graphql.Args() args: EditedFieldFindManyArgs
  ): Promise<EditedField[]> {
    return this.service.editedFields(args);
  }

  @graphql.Query(() => EditedField, { nullable: true })
  async editedField(
    @graphql.Args() args: EditedFieldFindUniqueArgs
  ): Promise<EditedField | null> {
    const result = await this.service.editedField(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EditedField)
  async createEditedField(
    @graphql.Args() args: CreateEditedFieldArgs
  ): Promise<EditedField> {
    return await this.service.createEditedField({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EditedField)
  async updateEditedField(
    @graphql.Args() args: UpdateEditedFieldArgs
  ): Promise<EditedField | null> {
    try {
      return await this.service.updateEditedField({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EditedField)
  async deleteEditedField(
    @graphql.Args() args: DeleteEditedFieldArgs
  ): Promise<EditedField | null> {
    try {
      return await this.service.deleteEditedField(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}