import { Module } from "@nestjs/common";
import { DependentAttachmentModuleBase } from "./base/dependentAttachment.module.base";
import { DependentAttachmentService } from "./dependentAttachment.service";
import { DependentAttachmentController } from "./dependentAttachment.controller";
import { DependentAttachmentResolver } from "./dependentAttachment.resolver";

@Module({
  imports: [DependentAttachmentModuleBase],
  controllers: [DependentAttachmentController],
  providers: [DependentAttachmentService, DependentAttachmentResolver],
  exports: [DependentAttachmentService],
})
export class DependentAttachmentModule {}
