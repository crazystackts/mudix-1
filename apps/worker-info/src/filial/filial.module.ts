import { Module } from "@nestjs/common";
import { FilialModuleBase } from "./base/filial.module.base";
import { FilialService } from "./filial.service";
import { FilialController } from "./filial.controller";
import { FilialResolver } from "./filial.resolver";

@Module({
  imports: [FilialModuleBase],
  controllers: [FilialController],
  providers: [FilialService, FilialResolver],
  exports: [FilialService],
})
export class FilialModule {}
