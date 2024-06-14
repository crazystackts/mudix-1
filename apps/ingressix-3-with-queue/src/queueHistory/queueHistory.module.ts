import { Module } from "@nestjs/common";
import { QueueHistoryModuleBase } from "./base/queueHistory.module.base";
import { QueueHistoryService } from "./queueHistory.service";
import { QueueHistoryController } from "./queueHistory.controller";
import { QueueHistoryResolver } from "./queueHistory.resolver";

@Module({
  imports: [QueueHistoryModuleBase],
  controllers: [QueueHistoryController],
  providers: [QueueHistoryService, QueueHistoryResolver],
  exports: [QueueHistoryService],
})
export class QueueHistoryModule {}
