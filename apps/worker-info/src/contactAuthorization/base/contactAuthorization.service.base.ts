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
  ContactAuthorization as PrismaContactAuthorization,
  Holder as PrismaHolder,
} from "@prisma/client";

export class ContactAuthorizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContactAuthorizationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contactAuthorization.count(args);
  }

  async contactAuthorizations<
    T extends Prisma.ContactAuthorizationFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ContactAuthorizationFindManyArgs>
  ): Promise<PrismaContactAuthorization[]> {
    return this.prisma.contactAuthorization.findMany<Prisma.ContactAuthorizationFindManyArgs>(
      args
    );
  }
  async contactAuthorization<
    T extends Prisma.ContactAuthorizationFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ContactAuthorizationFindUniqueArgs>
  ): Promise<PrismaContactAuthorization | null> {
    return this.prisma.contactAuthorization.findUnique(args);
  }
  async createContactAuthorization<
    T extends Prisma.ContactAuthorizationCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ContactAuthorizationCreateArgs>
  ): Promise<PrismaContactAuthorization> {
    return this.prisma.contactAuthorization.create<T>(args);
  }
  async updateContactAuthorization<
    T extends Prisma.ContactAuthorizationUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ContactAuthorizationUpdateArgs>
  ): Promise<PrismaContactAuthorization> {
    return this.prisma.contactAuthorization.update<T>(args);
  }
  async deleteContactAuthorization<
    T extends Prisma.ContactAuthorizationDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ContactAuthorizationDeleteArgs>
  ): Promise<PrismaContactAuthorization> {
    return this.prisma.contactAuthorization.delete(args);
  }

  async getHolder(parentId: string): Promise<PrismaHolder | null> {
    return this.prisma.contactAuthorization
      .findUnique({
        where: { id: parentId },
      })
      .holder();
  }
}
