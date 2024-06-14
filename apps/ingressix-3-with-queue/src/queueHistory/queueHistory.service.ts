import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueHistoryServiceBase } from "./base/queueHistory.service.base";

@Injectable()
export class QueueHistoryService extends QueueHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
