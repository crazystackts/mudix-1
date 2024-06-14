/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Phone as PrismaPhone } from "@prisma/client";

export class PhoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PhoneCountArgs, "select">): Promise<number> {
    return this.prisma.phone.count(args);
  }

  async phones<T extends Prisma.PhoneFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneFindManyArgs>
  ): Promise<PrismaPhone[]> {
    return this.prisma.phone.findMany<Prisma.PhoneFindManyArgs>(args);
  }
  async phone<T extends Prisma.PhoneFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneFindUniqueArgs>
  ): Promise<PrismaPhone | null> {
    return this.prisma.phone.findUnique(args);
  }
  async createPhone<T extends Prisma.PhoneCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneCreateArgs>
  ): Promise<PrismaPhone> {
    return this.prisma.phone.create<T>(args);
  }
  async updatePhone<T extends Prisma.PhoneUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneUpdateArgs>
  ): Promise<PrismaPhone> {
    return this.prisma.phone.update<T>(args);
  }
  async deletePhone<T extends Prisma.PhoneDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneDeleteArgs>
  ): Promise<PrismaPhone> {
    return this.prisma.phone.delete(args);
  }
}