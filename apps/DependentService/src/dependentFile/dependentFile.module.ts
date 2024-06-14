import { Module } from "@nestjs/common";
import { DependentFileModuleBase } from "./base/dependentFile.module.base";
import { DependentFileService } from "./dependentFile.service";
import { DependentFileController } from "./dependentFile.controller";
import { DependentFileResolver } from "./dependentFile.resolver";

@Module({
  imports: [DependentFileModuleBase],
  controllers: [DependentFileController],
  providers: [DependentFileService, DependentFileResolver],
  exports: [DependentFileService],
})
export class DependentFileModule {}
