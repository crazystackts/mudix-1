import { Module } from "@nestjs/common";
import { WorkerModuleBase } from "./base/worker.module.base";
import { WorkerService } from "./worker.service";
import { WorkerController } from "./worker.controller";
import { WorkerResolver } from "./worker.resolver";

@Module({
  imports: [WorkerModuleBase],
  controllers: [WorkerController],
  providers: [WorkerService, WorkerResolver],
  exports: [WorkerService],
})
export class WorkerModule {}
