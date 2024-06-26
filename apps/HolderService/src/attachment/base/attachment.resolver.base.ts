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
import { Attachment } from "./Attachment";
import { AttachmentCountArgs } from "./AttachmentCountArgs";
import { AttachmentFindManyArgs } from "./AttachmentFindManyArgs";
import { AttachmentFindUniqueArgs } from "./AttachmentFindUniqueArgs";
import { CreateAttachmentArgs } from "./CreateAttachmentArgs";
import { UpdateAttachmentArgs } from "./UpdateAttachmentArgs";
import { DeleteAttachmentArgs } from "./DeleteAttachmentArgs";
import { AttachmentService } from "../attachment.service";
@graphql.Resolver(() => Attachment)
export class AttachmentResolverBase {
  constructor(protected readonly service: AttachmentService) {}

  async _attachmentsMeta(
    @graphql.Args() args: AttachmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Attachment])
  async attachments(
    @graphql.Args() args: AttachmentFindManyArgs
  ): Promise<Attachment[]> {
    return this.service.attachments(args);
  }

  @graphql.Query(() => Attachment, { nullable: true })
  async attachment(
    @graphql.Args() args: AttachmentFindUniqueArgs
  ): Promise<Attachment | null> {
    const result = await this.service.attachment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Attachment)
  async createAttachment(
    @graphql.Args() args: CreateAttachmentArgs
  ): Promise<Attachment> {
    return await this.service.createAttachment({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Attachment)
  async updateAttachment(
    @graphql.Args() args: UpdateAttachmentArgs
  ): Promise<Attachment | null> {
    try {
      return await this.service.updateAttachment({
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

  @graphql.Mutation(() => Attachment)
  async deleteAttachment(
    @graphql.Args() args: DeleteAttachmentArgs
  ): Promise<Attachment | null> {
    try {
      return await this.service.deleteAttachment(args);
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
