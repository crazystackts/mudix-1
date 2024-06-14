import { Module } from "@nestjs/common";
import { PhoneModuleBase } from "./base/phone.module.base";
import { PhoneService } from "./phone.service";
import { PhoneController } from "./phone.controller";
import { PhoneResolver } from "./phone.resolver";

@Module({
  imports: [PhoneModuleBase],
  controllers: [PhoneController],
  providers: [PhoneService, PhoneResolver],
  exports: [PhoneService],
})
export class PhoneModule {}
