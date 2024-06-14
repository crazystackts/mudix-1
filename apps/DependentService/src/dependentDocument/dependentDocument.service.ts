import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentDocumentServiceBase } from "./base/dependentDocument.service.base";

@Injectable()
export class DependentDocumentService extends DependentDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
