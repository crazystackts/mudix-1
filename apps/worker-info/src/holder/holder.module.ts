import { Module } from "@nestjs/common";
import { HolderModuleBase } from "./base/holder.module.base";
import { HolderService } from "./holder.service";
import { HolderController } from "./holder.controller";
import { HolderResolver } from "./holder.resolver";

@Module({
  imports: [HolderModuleBase],
  controllers: [HolderController],
  providers: [HolderService, HolderResolver],
  exports: [HolderService],
})
export class HolderModule {}
