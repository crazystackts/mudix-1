import { Module } from "@nestjs/common";
import { PaymentHistoryModuleBase } from "./base/paymentHistory.module.base";
import { PaymentHistoryService } from "./paymentHistory.service";
import { PaymentHistoryController } from "./paymentHistory.controller";
import { PaymentHistoryResolver } from "./paymentHistory.resolver";

@Module({
  imports: [PaymentHistoryModuleBase],
  controllers: [PaymentHistoryController],
  providers: [PaymentHistoryService, PaymentHistoryResolver],
  exports: [PaymentHistoryService],
})
export class PaymentHistoryModule {}
