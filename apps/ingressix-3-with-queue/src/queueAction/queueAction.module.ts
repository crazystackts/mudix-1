import { Module } from "@nestjs/common";
import { QueueActionModuleBase } from "./base/queueAction.module.base";
import { QueueActionService } from "./queueAction.service";
import { QueueActionController } from "./queueAction.controller";
import { QueueActionResolver } from "./queueAction.resolver";

@Module({
  imports: [QueueActionModuleBase],
  controllers: [QueueActionController],
  providers: [QueueActionService, QueueActionResolver],
  exports: [QueueActionService],
})
export class QueueActionModule {}
