import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocioeconomicInfoServiceBase } from "./base/socioeconomicInfo.service.base";

@Injectable()
export class SocioeconomicInfoService extends SocioeconomicInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
