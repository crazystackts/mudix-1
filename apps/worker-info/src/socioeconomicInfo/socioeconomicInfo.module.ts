import { Module } from "@nestjs/common";
import { SocioeconomicInfoModuleBase } from "./base/socioeconomicInfo.module.base";
import { SocioeconomicInfoService } from "./socioeconomicInfo.service";
import { SocioeconomicInfoController } from "./socioeconomicInfo.controller";
import { SocioeconomicInfoResolver } from "./socioeconomicInfo.resolver";

@Module({
  imports: [SocioeconomicInfoModuleBase],
  controllers: [SocioeconomicInfoController],
  providers: [SocioeconomicInfoService, SocioeconomicInfoResolver],
  exports: [SocioeconomicInfoService],
})
export class SocioeconomicInfoModule {}
