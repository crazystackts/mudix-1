import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentAttachmentServiceBase } from "./base/dependentAttachment.service.base";

@Injectable()
export class DependentAttachmentService extends DependentAttachmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
