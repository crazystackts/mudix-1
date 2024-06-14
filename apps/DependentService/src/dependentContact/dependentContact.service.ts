import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentContactServiceBase } from "./base/dependentContact.service.base";

@Injectable()
export class DependentContactService extends DependentContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
