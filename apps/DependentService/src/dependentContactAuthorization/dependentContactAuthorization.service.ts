import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentContactAuthorizationServiceBase } from "./base/dependentContactAuthorization.service.base";

@Injectable()
export class DependentContactAuthorizationService extends DependentContactAuthorizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
