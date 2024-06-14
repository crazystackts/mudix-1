import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentHistoryServiceBase } from "./base/paymentHistory.service.base";

@Injectable()
export class PaymentHistoryService extends PaymentHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
