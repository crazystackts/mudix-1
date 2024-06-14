import { Module } from "@nestjs/common";
import { DependentPhoneModuleBase } from "./base/dependentPhone.module.base";
import { DependentPhoneService } from "./dependentPhone.service";
import { DependentPhoneController } from "./dependentPhone.controller";
import { DependentPhoneResolver } from "./dependentPhone.resolver";

@Module({
  imports: [DependentPhoneModuleBase],
  controllers: [DependentPhoneController],
  providers: [DependentPhoneService, DependentPhoneResolver],
  exports: [DependentPhoneService],
})
export class DependentPhoneModule {}
