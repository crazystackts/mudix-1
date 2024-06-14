import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentFileServiceBase } from "./base/dependentFile.service.base";

@Injectable()
export class DependentFileService extends DependentFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
