/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Attachment as PrismaAttachment } from "@prisma/client";

export class AttachmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttachmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attachment.count(args);
  }

  async attachments<T extends Prisma.AttachmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttachmentFindManyArgs>
  ): Promise<PrismaAttachment[]> {
    return this.prisma.attachment.findMany<Prisma.AttachmentFindManyArgs>(args);
  }
  async attachment<T extends Prisma.AttachmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttachmentFindUniqueArgs>
  ): Promise<PrismaAttachment | null> {
    return this.prisma.attachment.findUnique(args);
  }
  async createAttachment<T extends Prisma.AttachmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttachmentCreateArgs>
  ): Promise<PrismaAttachment> {
    return this.prisma.attachment.create<T>(args);
  }
  async updateAttachment<T extends Prisma.AttachmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttachmentUpdateArgs>
  ): Promise<PrismaAttachment> {
    return this.prisma.attachment.update<T>(args);
  }
  async deleteAttachment<T extends Prisma.AttachmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttachmentDeleteArgs>
  ): Promise<PrismaAttachment> {
    return this.prisma.attachment.delete(args);
  }
}
