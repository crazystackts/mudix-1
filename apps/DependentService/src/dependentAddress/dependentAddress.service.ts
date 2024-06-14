import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DependentAddressServiceBase } from "./base/dependentAddress.service.base";

@Injectable()
export class DependentAddressService extends DependentAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
