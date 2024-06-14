import { Module } from "@nestjs/common";
import { DependentModuleBase } from "./base/dependent.module.base";
import { DependentService } from "./dependent.service";
import { DependentController } from "./dependent.controller";
import { DependentResolver } from "./dependent.resolver";

@Module({
  imports: [DependentModuleBase],
  controllers: [DependentController],
  providers: [DependentService, DependentResolver],
  exports: [DependentService],
})
export class DependentModule {}
