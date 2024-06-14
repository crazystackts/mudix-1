import { Module } from "@nestjs/common";
import { QueuePositionModuleBase } from "./base/queuePosition.module.base";
import { QueuePositionService } from "./queuePosition.service";
import { QueuePositionController } from "./queuePosition.controller";
import { QueuePositionResolver } from "./queuePosition.resolver";

@Module({
  imports: [QueuePositionModuleBase],
  controllers: [QueuePositionController],
  providers: [QueuePositionService, QueuePositionResolver],
  exports: [QueuePositionService],
})
export class QueuePositionModule {}
