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
  Ticket as PrismaTicket,
  Session as PrismaSession,
} from "@prisma/client";

export class TicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TicketCountArgs, "select">): Promise<number> {
    return this.prisma.ticket.count(args);
  }

  async tickets<T extends Prisma.TicketFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketFindManyArgs>
  ): Promise<PrismaTicket[]> {
    return this.prisma.ticket.findMany<Prisma.TicketFindManyArgs>(args);
  }
  async ticket<T extends Prisma.TicketFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketFindUniqueArgs>
  ): Promise<PrismaTicket | null> {
    return this.prisma.ticket.findUnique(args);
  }
  async createTicket<T extends Prisma.TicketCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketCreateArgs>
  ): Promise<PrismaTicket> {
    return this.prisma.ticket.create<T>(args);
  }
  async updateTicket<T extends Prisma.TicketUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketUpdateArgs>
  ): Promise<PrismaTicket> {
    return this.prisma.ticket.update<T>(args);
  }
  async deleteTicket<T extends Prisma.TicketDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketDeleteArgs>
  ): Promise<PrismaTicket> {
    return this.prisma.ticket.delete(args);
  }

  async getSessions(parentId: number): Promise<PrismaSession | null> {
    return this.prisma.ticket
      .findUnique({
        where: { id: parentId },
      })
      .sessions();
  }
}
