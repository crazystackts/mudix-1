import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhoneServiceBase } from "./base/phone.service.base";

@Injectable()
export class PhoneService extends PhoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
