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
import { File } from "./File";
import { FileCountArgs } from "./FileCountArgs";
import { FileFindManyArgs } from "./FileFindManyArgs";
import { FileFindUniqueArgs } from "./FileFindUniqueArgs";
import { CreateFileArgs } from "./CreateFileArgs";
import { UpdateFileArgs } from "./UpdateFileArgs";
import { DeleteFileArgs } from "./DeleteFileArgs";
import { Attachment } from "../../attachment/base/Attachment";
import { FileService } from "../file.service";
@graphql.Resolver(() => File)
export class FileResolverBase {
  constructor(protected readonly service: FileService) {}

  async _filesMeta(
    @graphql.Args() args: FileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [File])
  async files(@graphql.Args() args: FileFindManyArgs): Promise<File[]> {
    return this.service.files(args);
  }

  @graphql.Query(() => File, { nullable: true })
  async file(@graphql.Args() args: FileFindUniqueArgs): Promise<File | null> {
    const result = await this.service.file(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => File)
  async createFile(@graphql.Args() args: CreateFileArgs): Promise<File> {
    return await this.service.createFile({
      ...args,
      data: {
        ...args.data,

        attachments: {
          connect: args.data.attachments,
        },
      },
    });
  }

  @graphql.Mutation(() => File)
  async updateFile(@graphql.Args() args: UpdateFileArgs): Promise<File | null> {
    try {
      return await this.service.updateFile({
        ...args,
        data: {
          ...args.data,

          attachments: {
            connect: args.data.attachments,
          },
        },
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

  @graphql.Mutation(() => File)
  async deleteFile(@graphql.Args() args: DeleteFileArgs): Promise<File | null> {
    try {
      return await this.service.deleteFile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Attachment, {
    nullable: true,
    name: "attachments",
  })
  async getAttachments(
    @graphql.Parent() parent: File
  ): Promise<Attachment | null> {
    const result = await this.service.getAttachments(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
