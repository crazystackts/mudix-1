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
  QueuePosition as PrismaQueuePosition,
  Queue as PrismaQueue,
  Session as PrismaSession,
  User as PrismaUser,
} from "@prisma/client";

export class QueuePositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QueuePositionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.queuePosition.count(args);
  }

  async queuePositions<T extends Prisma.QueuePositionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QueuePositionFindManyArgs>
  ): Promise<PrismaQueuePosition[]> {
    return this.prisma.queuePosition.findMany<Prisma.QueuePositionFindManyArgs>(
      args
    );
  }
  async queuePosition<T extends Prisma.QueuePositionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QueuePositionFindUniqueArgs>
  ): Promise<PrismaQueuePosition | null> {
    return this.prisma.queuePosition.findUnique(args);
  }
  async createQueuePosition<T extends Prisma.QueuePositionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QueuePositionCreateArgs>
  ): Promise<PrismaQueuePosition> {
    return this.prisma.queuePosition.create<T>(args);
  }
  async updateQueuePosition<T extends Prisma.QueuePositionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QueuePositionUpdateArgs>
  ): Promise<PrismaQueuePosition> {
    return this.prisma.queuePosition.update<T>(args);
  }
  async deleteQueuePosition<T extends Prisma.QueuePositionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QueuePositionDeleteArgs>
  ): Promise<PrismaQueuePosition> {
    return this.prisma.queuePosition.delete(args);
  }

  async getQueues(parentId: string): Promise<PrismaQueue | null> {
    return this.prisma.queuePosition
      .findUnique({
        where: { id: parentId },
      })
      .queues();
  }

  async getSessions(parentId: string): Promise<PrismaSession | null> {
    return this.prisma.queuePosition
      .findUnique({
        where: { id: parentId },
      })
      .sessions();
  }

  async getUsers(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.queuePosition
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}