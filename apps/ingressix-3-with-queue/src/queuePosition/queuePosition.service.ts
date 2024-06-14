import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueuePositionServiceBase } from "./base/queuePosition.service.base";

@Injectable()
export class QueuePositionService extends QueuePositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
