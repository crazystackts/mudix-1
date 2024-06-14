import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueActionServiceBase } from "./base/queueAction.service.base";

@Injectable()
export class QueueActionService extends QueueActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
