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
  Holder as PrismaHolder,
  Address as PrismaAddress,
  Attachment as PrismaAttachment,
  Contact as PrismaContact,
  Document as PrismaDocument,
  EditedField as PrismaEditedField,
  Filial as PrismaFilial,
  Phone as PrismaPhone,
  SocioeconomicInfo as PrismaSocioeconomicInfo,
  ContactAuthorization as PrismaContactAuthorization,
  Request as PrismaRequest,
} from "@prisma/client";

export class HolderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HolderCountArgs, "select">): Promise<number> {
    return this.prisma.holder.count(args);
  }

  async holders<T extends Prisma.HolderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolderFindManyArgs>
  ): Promise<PrismaHolder[]> {
    return this.prisma.holder.findMany<Prisma.HolderFindManyArgs>(args);
  }
  async holder<T extends Prisma.HolderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolderFindUniqueArgs>
  ): Promise<PrismaHolder | null> {
    return this.prisma.holder.findUnique(args);
  }
  async createHolder<T extends Prisma.HolderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolderCreateArgs>
  ): Promise<PrismaHolder> {
    return this.prisma.holder.create<T>(args);
  }
  async updateHolder<T extends Prisma.HolderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolderUpdateArgs>
  ): Promise<PrismaHolder> {
    return this.prisma.holder.update<T>(args);
  }
  async deleteHolder<T extends Prisma.HolderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolderDeleteArgs>
  ): Promise<PrismaHolder> {
    return this.prisma.holder.delete(args);
  }

  async findAddresses(
    parentId: string,
    args: Prisma.AddressFindManyArgs
  ): Promise<PrismaAddress[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .addresses(args);
  }

  async findAttachments(
    parentId: string,
    args: Prisma.AttachmentFindManyArgs
  ): Promise<PrismaAttachment[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attachments(args);
  }

  async findContacts(
    parentId: string,
    args: Prisma.ContactFindManyArgs
  ): Promise<PrismaContact[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contacts(args);
  }

  async findDocuments(
    parentId: string,
    args: Prisma.DocumentFindManyArgs
  ): Promise<PrismaDocument[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .documents(args);
  }

  async findEditedFields(
    parentId: string,
    args: Prisma.EditedFieldFindManyArgs
  ): Promise<PrismaEditedField[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .editedFields(args);
  }

  async findFilial(
    parentId: string,
    args: Prisma.FilialFindManyArgs
  ): Promise<PrismaFilial[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .filial(args);
  }

  async findPhones(
    parentId: string,
    args: Prisma.PhoneFindManyArgs
  ): Promise<PrismaPhone[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .phones(args);
  }

  async findSocioeconomicInfo(
    parentId: string,
    args: Prisma.SocioeconomicInfoFindManyArgs
  ): Promise<PrismaSocioeconomicInfo[]> {
    return this.prisma.holder
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .socioeconomicInfo(args);
  }

  async getContactAuthorization(
    parentId: string
  ): Promise<PrismaContactAuthorization | null> {
    return this.prisma.holder
      .findUnique({
        where: { id: parentId },
      })
      .contactAuthorization();
  }

  async getRequest(parentId: string): Promise<PrismaRequest | null> {
    return this.prisma.holder
      .findUnique({
        where: { id: parentId },
      })
      .request();
  }
}