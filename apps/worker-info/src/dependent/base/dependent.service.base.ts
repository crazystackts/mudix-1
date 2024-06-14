/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Dependent as PrismaDependent } from "@prisma/client";

export class DependentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DependentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dependent.count(args);
  }

  async dependents<T extends Prisma.DependentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DependentFindManyArgs>
  ): Promise<PrismaDependent[]> {
    return this.prisma.dependent.findMany<Prisma.DependentFindManyArgs>(args);
  }
  async dependent<T extends Prisma.DependentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DependentFindUniqueArgs>
  ): Promise<PrismaDependent | null> {
    return this.prisma.dependent.findUnique(args);
  }
  async createDependent<T extends Prisma.DependentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DependentCreateArgs>
  ): Promise<PrismaDependent> {
    return this.prisma.dependent.create<T>(args);
  }
  async updateDependent<T extends Prisma.DependentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DependentUpdateArgs>
  ): Promise<PrismaDependent> {
    return this.prisma.dependent.update<T>(args);
  }
  async deleteDependent<T extends Prisma.DependentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DependentDeleteArgs>
  ): Promise<PrismaDependent> {
    return this.prisma.dependent.delete(args);
  }
}
