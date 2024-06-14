import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HolderServiceBase } from "./base/holder.service.base";

@Injectable()
export class HolderService extends HolderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
