import { Module } from "@nestjs/common";
import { DependentDocumentModuleBase } from "./base/dependentDocument.module.base";
import { DependentDocumentService } from "./dependentDocument.service";
import { DependentDocumentController } from "./dependentDocument.controller";
import { DependentDocumentResolver } from "./dependentDocument.resolver";

@Module({
  imports: [DependentDocumentModuleBase],
  controllers: [DependentDocumentController],
  providers: [DependentDocumentService, DependentDocumentResolver],
  exports: [DependentDocumentService],
})
export class DependentDocumentModule {}
