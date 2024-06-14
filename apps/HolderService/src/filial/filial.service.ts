import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FilialServiceBase } from "./base/filial.service.base";

@Injectable()
export class FilialService extends FilialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
