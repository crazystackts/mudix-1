import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentPhoneServiceBase } from "./base/dependentPhone.service.base";

@Injectable()
export class DependentPhoneService extends DependentPhoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
