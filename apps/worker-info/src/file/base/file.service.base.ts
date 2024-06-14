/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  File as PrismaFile,
  Attachment as PrismaAttachment,
} from "@prisma/client";

export class FileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FileCountArgs, "select">): Promise<number> {
    return this.prisma.file.count(args);
  }

  async files<T extends Prisma.FileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindManyArgs>
  ): Promise<PrismaFile[]> {
    return this.prisma.file.findMany<Prisma.FileFindManyArgs>(args);
  }
  async file<T extends Prisma.FileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileFindUniqueArgs>
  ): Promise<PrismaFile | null> {
    return this.prisma.file.findUnique(args);
  }
  async createFile<T extends Prisma.FileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileCreateArgs>
  ): Promise<PrismaFile> {
    return this.prisma.file.create<T>(args);
  }
  async updateFile<T extends Prisma.FileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileUpdateArgs>
  ): Promise<PrismaFile> {
    return this.prisma.file.update<T>(args);
  }
  async deleteFile<T extends Prisma.FileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FileDeleteArgs>
  ): Promise<PrismaFile> {
    return this.prisma.file.delete(args);
  }

  async getAttachments(parentId: string): Promise<PrismaAttachment | null> {
    return this.prisma.file
      .findUnique({
        where: { id: parentId },
      })
      .attachments();
  }
}
