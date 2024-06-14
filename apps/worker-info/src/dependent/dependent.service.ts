import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentServiceBase } from "./base/dependent.service.base";

@Injectable()
export class DependentService extends DependentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
