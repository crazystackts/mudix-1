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
  Order as PrismaOrder,
  OrderItem as PrismaOrderItem,
  PaymentHistory as PrismaPaymentHistory,
  Customer as PrismaCustomer,
  Session as PrismaSession,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OrderCountArgs, "select">): Promise<number> {
    return this.prisma.order.count(args);
  }

  async orders<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<PrismaOrder[]> {
    return this.prisma.order.findMany<Prisma.OrderFindManyArgs>(args);
  }
  async order<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<PrismaOrder | null> {
    return this.prisma.order.findUnique(args);
  }
  async createOrder<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<PrismaOrder> {
    return this.prisma.order.create<T>(args);
  }
  async updateOrder<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<PrismaOrder> {
    return this.prisma.order.update<T>(args);
  }
  async deleteOrder<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<PrismaOrder> {
    return this.prisma.order.delete(args);
  }

  async findOrderItems(
    parentId: number,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<PrismaOrderItem[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orderItems(args);
  }

  async findPaymentHistory(
    parentId: number,
    args: Prisma.PaymentHistoryFindManyArgs
  ): Promise<PrismaPaymentHistory[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentHistory(args);
  }

  async getCustomer(parentId: number): Promise<PrismaCustomer | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getSession(parentId: number): Promise<PrismaSession | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .session();
  }
}
