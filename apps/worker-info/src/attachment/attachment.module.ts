import { Module } from "@nestjs/common";
import { AttachmentModuleBase } from "./base/attachment.module.base";
import { AttachmentService } from "./attachment.service";
import { AttachmentController } from "./attachment.controller";
import { AttachmentResolver } from "./attachment.resolver";

@Module({
  imports: [AttachmentModuleBase],
  controllers: [AttachmentController],
  providers: [AttachmentService, AttachmentResolver],
  exports: [AttachmentService],
})
export class AttachmentModule {}
